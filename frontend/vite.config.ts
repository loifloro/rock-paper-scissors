import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    base: "./frontend",
    plugins: [react()],
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "./src/components"),
            "@stores": path.resolve(__dirname, "./src/stores"),
            "@type": path.resolve(__dirname, "./src/types"),
            "@lib": path.resolve(__dirname, "./src/lib"),
        },
    },
});
