/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "APP_");
  return {
    define: {
      "process.env.APP_BASE_URL": JSON.stringify(env.APP_BASE_URL),
    },
    plugins: [react()],

    // SETUP certificato ssl per sviluppo in locale
    server: {
      https: {
        key: "../server/localhost-key.pem",
        cert: "../server/localhost.pem",
      },
    },
  };
});
