import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const port = env.VITE_PORT ? Number(env.VITE_PORT) : 8080;
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port,
    },
  };
});
