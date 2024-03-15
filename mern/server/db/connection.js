import { MongoClient, ServerApiVersion } from "mongodb";

const ATLAS_URI = "mongodb+srv://labpresentation:lTT43mg65JBQATw8@cluster0.ljfguuf.mongodb.net/employees?retryWrites=true&w=majority"

//const ATLAS_URI = "mongodb+srv://labpresentaton:vurasl@cluster0.due2xe7.mongodb.net/"


//ATLAS_URI = "mongodb+srv://labpresentation:vanderbiltrasl@cluster0.due2xe7.mongodb.net/";

//const URI = process.env.ATLAS_URI || "";
const URI =  ATLAS_URI||""
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
