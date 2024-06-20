import mongoose from "mongoose";
import { config } from "dotenv";

class Database {
  constructor() {
    config();
    this.instantiate(process.env.MONGO_DB_URI);
  }

  instantiate(url) {
    try {
      mongoose.connect(url);

      mongoose.connection.once("connected", () =>
        console.info("Connection to the database has been established")
      );
    } catch (error) {
      console.error("We could not connect to the database", error);
    }
  }
}


export default Database;