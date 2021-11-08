import mongoose from "mongoose";

let mongoDB = `mongodb+srv://JavierLeon:JavierLeon100@cluster0.tzpqi.mongodb.net/Full-Stack-Project?retryWrites=true&w=majority`;

export default mongoose.connect(mongoDB); //returns a promise to app.js
