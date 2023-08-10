import * as mongoDB from "mongodb"
require("dotenv")

export const collections: { users?: mongoDB.Collection } = {}
let client: mongoDB.MongoClient

export async function connectToMongo() {
    client = new mongoDB.MongoClient(process.env.MONGODB)
    await client.connect()
    const db: mongoDB.Db = await client.db(process.env.DATABASE)
    const usersCollection: mongoDB.Collection = db.collection(process.env.USERS_COLLECTION)

    collections.users = usersCollection
    console.log("Successfully connected to mongoDB!")
}

export async function diconnectMongo() {
    await client.close()
}
