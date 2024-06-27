import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/tw-portfolio/",
    build: { outDir: "dist" },
    publicDir: "public",
    experimental: {
        renderBuiltUrl: function (filename, _a) {
            var hostType = _a.hostType;
            if (hostType === "js") {
                return {
                    runtime: "window.__toCdnUrl(".concat(JSON.stringify(filename), ")"),
                };
            }
            else {
                return { relative: true };
            }
        },
    },
});
