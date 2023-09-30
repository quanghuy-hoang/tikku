import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("Please add your Mongo Uri to the .env file");

declare global {
  namespace globalThis {
    var _mongoClientPromise: Promise<MongoClient>;
  }
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise: ReturnType<typeof client.connect>;

if (!global._mongoClientPromise) global._mongoClientPromise = client.connect();

clientPromise = global._mongoClientPromise;

export default clientPromise;
