import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": resolve(__dirname, "./src/components"),
            "@stores": resolve(__dirname, "./src/stores"),
            "@type": resolve(__dirname, "./src/types"),
            "@lib": resolve(__dirname, "./src/lib"),
        },
    },
});
