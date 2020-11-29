import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const { MONGODB_HOTS, MONGODB_DATABASE } = process.env
/* const MONGODB_URI = "mongodb+srv://sebas:1234@art-auction.unvaz.mongodb.net/art-database?retryWrites=true&w=majority" */
const MONGODB_URI = `mongodb://${MONGODB_HOTS}/${MONGODB_DATABASE}`

const client = new MongoClient(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const withDatabase = handler => (req, res) => {
    try {
        if(!client.isConnected()) {
            console.log('conectando')
            return client.connect().then(() => {
                req.db = client.db(MONGODB_DATABASE)
                return handler(req, res)
            })
        }
        req.db = client.db(MONGODB_DATABASE)
        return handler(req, res)
    } catch (error) {
        console.log('test')
        /* console.error(error) */
    }
}

export default withDatabase