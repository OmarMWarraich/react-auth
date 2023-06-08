import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb+srv://process.env.REACT_APP_USERNAME:process.env.REACT_APP_PASSWORD@cluster0.zm7bgjy.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}
