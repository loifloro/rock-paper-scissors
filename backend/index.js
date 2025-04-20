import { createServer } from "node:http";
import { getPickWinner } from "./lib/getPickWinner.js";
import { Server } from "socket.io";
import express from "express";

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});

const players = [];
let room;

io.on("connection", (socket) => {
    socket.on("join room", ({ _room, player, opponent }) => {
        socket.join(_room);

        if (!players.find((item) => item.playerId === player)) {
            players.push({
                playerId: player,
                opponentId: opponent,
                score: 0,
            });
        }

        room = _room;
    });

    socket.on("player pick", ({ player, pick }) => {
        const currentPlayer = players.find(
            (_player) => _player.playerId === player
        );

        currentPlayer.pick = pick;

        const opponent = players.find(
            (item) => item.playerId === currentPlayer.opponentId
        );

        let pickWinner;

        if (opponent.pick) {
            if (getPickWinner(currentPlayer.pick, opponent.pick) === "win") {
                pickWinner = currentPlayer.playerId;
                currentPlayer.score = currentPlayer.score + 1;
            } else if (
                getPickWinner(currentPlayer.pick, opponent.pick) === "lose"
            ) {
                pickWinner = opponent.playerId;
                opponent.score = opponent.score + 1;
            }

            io.emit("score", {
                pickWinner,
                players: [currentPlayer, opponent],
            });
        }
    });

    socket.on("reset pick", (player) => {
        const currentPlayer = players.find(
            (_player) => _player.playerId === player
        );
        const opponent = players.find(
            (item) => item.playerId === currentPlayer.opponentId
        );

        currentPlayer.pick = null;
        opponent.pick = null;

        io.emit("reset pick");

        console.log(players);
    });
});

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
