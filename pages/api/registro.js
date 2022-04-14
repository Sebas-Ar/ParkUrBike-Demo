import withMiddleware from "../../middlewares/withMiddleware"
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
    const { codigo_entrad, codigo_salida, park_id, state } = req.body

    if (req.method === "GET") {
        const data = await req.db.collection("registro").find({}).toArray()

        res.statusCode = 200
        res.json({ status: true, data })
    } else if (req.method === "POST") {
        if (state === "entrada") {
            const user = await req.db
                .collection("biciusuarios")
                .findOne({ codigo_entrad })

            if (user) {
                await req.db
                    .collection("biciusuarios")
                    .update({ codigo_entrad }, { $set: { on_park: true } })
                const park = await req.db
                    .collection("biciparqueaderos")
                    .findOne({ _id: ObjectId(park_id) })
                await req.db
                    .collection("biciparqueaderos")
                    .update(
                        { _id: ObjectId(park_id) },
                        { $set: { freeRacks: park.freeRacks - 1 } }
                    )

                const rack = park.freeRacks - 1

                const rackAssing = park.totalRacks - park.freeRacks + 1

                await req.db.collection("registro").insert({
                    user_id: user._id,
                    park_name: park.name,
                    price: park.price,
                    entrada: new Date(),
                    salida: "",
                    rack,
                })

                res.statusCode = 200
                res.json({
                    status: true,
                    message: "registro creado",
                    rack,
                    rackAssing,
                })
            } else {
                res.statusCode = 200
                res.json({ status: false, message: "No existe el codigo" })
            }
        } else {
            const user = await req.db
                .collection("biciusuarios")
                .findOne({ codigo_salida })

            if (user) {
                const park = await req.db
                    .collection("biciparqueaderos")
                    .findOne({ _id: ObjectId(park_id) })
                await req.db
                    .collection("biciusuarios")
                    .update(
                        { codigo_salida },
                        { $set: { on_park: false, entrada: "", salida: "" } }
                    )
                await req.db
                    .collection("biciparqueaderos")
                    .update(
                        { _id: ObjectId(park_id) },
                        { $set: { freeRacks: park.freeRacks + 1 } }
                    )

                const rack = park.freeRacks + 1

                const register = await req.db
                    .collection("registro")
                    .findAndModify(
                        { user_id: ObjectId(user._id) },
                        [["_id", "asc"]],
                        {
                            $set: {
                                salida: new Date(),
                            },
                        },
                        { new: true }
                    )

                const time = Math.round(
                    (register.value.salida - register.value.entrada) / 60000
                )

                const price = time * park.price

                res.statusCode = 200
                res.json({
                    status: true,
                    message: "registro creado",
                    price: price ? price : 10,
                    rack,
                })
            } else {
                res.statusCode = 200
                res.json({ status: false, message: "No existe el codigo" })
            }
        }

        /*   }  else if (req.method === 'POST') {

    res.statusCode = 200
    res.json({ message: 'error' })
 */
    } else {
        res.status(405).end()
    }
}

export default withMiddleware(handler)
