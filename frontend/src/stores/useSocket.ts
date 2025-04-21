import { io, Socket } from "socket.io-client";
import { create } from "zustand";

type Store = {
    socket: Socket;
};

export const useSocket = create<Store>()(() => ({
    socket: io(
        import.meta.env.PROD
            ? import.meta.env.LIVE_URL
            : import.meta.env.DEVELOPMENT_URL
    ),
}));
