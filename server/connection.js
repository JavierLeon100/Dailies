import mongoose from "mongoose";

let mongoDB = process.env.DB_CONNECTION;

export default mongoose.connect(mongoDB); //returns a promise to app.js
