import withMiddleware from '../../middlewares/withMiddleware'
import {ObjectId} from 'mongodb';

const handler = async (req, res) => {

  if (req.method === 'POST') {

    const {code, user_id} = req.body

    const user = await req.db.collection('biciusuarios').findOne({_id: ObjectId(user_id)})

    if (user.on_park) {

      await req.db.collection('biciusuarios').update({_id: ObjectId(user_id)}, {$set: {codigo_salida: code}})
      
    } else {

      await req.db.collection('biciusuarios').update({_id: ObjectId(user_id)}, {$set: {codigo_entrad: code}})
      
    }
    
    res.statusCode = 200
    res.json({ message: 'codigo insertado con exito', user })

  /* }  else if (req.method === 'POST') {

    res.statusCode = 200
    res.json({ message: user }) */

  } else {
    
    res.status(405).end();

  }

}

export default withMiddleware(handler)