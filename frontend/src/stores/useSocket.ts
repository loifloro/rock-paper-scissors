import { io, Socket } from "socket.io-client";
import { create } from "zustand";

type Store = {
    socket: Socket;
};

export const useSocket = create<Store>()(() => ({
    socket: io(
        import.meta.env.NODE_ENV === "production"
            ? import.meta.env.VITE_LIVE_URL
            : import.meta.env.VITE_DEVELOPMENT_URL,
        {
            transports: ["websocket", "polling"],
            withCredentials: true,
        }
    ),
}));
