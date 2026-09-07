import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
            "ziggy-js": path.resolve(__dirname, "./vendor/tightenco/ziggy"),
        },
    },
    server: {
        watch: {
            ignored: ["**/storage/framework/views/**"],
        },
    },
});
