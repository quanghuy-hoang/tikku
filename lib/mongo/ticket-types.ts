import * as mongoDB from "mongodb";
import clientPromise from ".";

let client: mongoDB.MongoClient;
let db: mongoDB.Db;
let ticket_type: mongoDB.Collection;

export type TicketType = {
  _id: string;
  name: string;
  price: number;
  details: string;
  amount: number;
};

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db(process.env.DB_NAME);
    ticket_type = db.collection("ticket_type");
  } catch (error) {
    throw error;
  }
}

(async () => {
  await init();
})();

export async function getTicketTypes() {
  try {
    if (!ticket_type) await init();

    const result = (await ticket_type
      .find({})
      .map((type) => ({ ...type, _id: type._id.toString() }))
      .toArray()) as TicketType[];

    return { ticketTypes: result };
  } catch (error) {
    throw error;
  }
}
