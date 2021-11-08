import express from "express";
import urlencoded from "express";
import mongoose from "mongoose";

let app = express(); // Create the Express Application

app.set("port", process.env.PORT || 8080); // create a setting called 'port' , with value 8080, or whatever the PORT environment variable is on the server.

//After connecting to DB create the server and start it up.
import("./connection.js")
    .then(() => {
        console.log("connected with DB!");
        const server = app.listen(app.settings.port, () =>
            console.log("listening on server, port:", app.settings.port)
        );
    })
    .catch((error) => console.log(error.message));

// *************************************************

import routerPost from "./routes/posts.js";
app.use("/");
