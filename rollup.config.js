import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "animease",
  },
  external: ["react", "react-dom",'framer-motion'],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
