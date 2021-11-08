import express from "express";
const router = express.Router();

//create router

router.get("/", (req, res) => {
    res.send("The Router for my pictures works");
});

//import handler form controller

//attach route handlers to this - this is the end of the chain

export default routerPost;
