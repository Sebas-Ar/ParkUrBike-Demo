import withMiddleware from '../../middlewares/withMiddleware'
import {ObjectId} from 'mongodb';

const handler = async (req, res) => {

  if (req.method === 'POST') {

    const { park_id } = req.body

    const park = await req.db.collection('biciparqueaderos').findOne({_id: ObjectId(park_id)})
    
    res.statusCode = 200
    res.json({ status: true, message: park })

  /* }  else if (req.method === 'POST') {

    res.statusCode = 200
    res.json({ message: park })
 */
  } else {
    
    res.status(405).end();

  }

}

export default withMiddleware(handler)