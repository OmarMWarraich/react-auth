import { MongoClient } from 'mongodb';
require('dotenv').config();

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zm7bgjy.mongodb.net/`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}
