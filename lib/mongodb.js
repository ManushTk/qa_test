import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://manushtk:manushtk@cluster0.1bzzs.mongodb.net/QADB?retryWrites=true&w=majority&appName=Cluster0';

if (!uri) {
    throw new Error("MongoDB URI is not defined in the environment variables");
}

const client = new MongoClient(uri);

export async function connectToDatabase() {
    if (!client.isConnected()) {
        await client.connect();
    }
    const db = client.db();
    return db;
}
