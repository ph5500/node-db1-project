const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());


server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

function logger(req, res, next) {
    console.log(`${req.method} request made to ${req.originalUrl}`)
    next();
}

module.exports = server;
