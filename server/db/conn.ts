require("dotenv").config();
import mongoose from "mongoose";

export async function conn() {
  try {

    await mongoose.connect(`${process.env.DB_STRING_CONNECTION}`)
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}
