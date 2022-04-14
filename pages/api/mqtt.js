import { MongoClient } from "mongodb"
import mqtt from "mqtt"

export default async (req, res) => {
    const { active } = req.body
    console.log(active)

    if (active) {
        const url = "mongodb://localhost/parkurbike"

        const client = new MongoClient(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        const options = {
            connectTimeout: 4000,
            clientId: "cliente" + new Date().getUTCMilliseconds(),
            keepalive: 60,
            clean: true,
        }

        const clientMqtt = mqtt.connect(
            "ws://54.158.172.112:8083/mqtt",
            options
        )

        clientMqtt.on("connect", () => {
            clientMqtt.subscribe("GPIO", function (err) {
                if (err) {
                    console.log("error al conectar al topic")
                } else {
                    console.log("se ha conectado")
                }
            })
        })

        client.connect().then(() => {
            clientMqtt.on("message", function (topic, message) {
                client.db("parkurbike").collection("registro").insertOne({
                    test: true,
                })
            })
        })
    }

    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ response: "data saved in Mongo" }))
}
