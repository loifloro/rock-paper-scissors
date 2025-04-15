import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";

const app = express();
const server = createServer(app);

const socket = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});

socket.on("connection", (socket) => {
    console.log(socket);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
