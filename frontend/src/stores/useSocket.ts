import { io, Socket } from "socket.io-client";
import { create } from "zustand";

type Store = {
    socket: Socket;
};

export const useSocket = create<Store>()(() => ({
    socket: io("localhost:3000"),
}));
