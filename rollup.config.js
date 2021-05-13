import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import css from "rollup-plugin-css-only";

const pkg = require("./package.json");

export default {
  input: "src/UserPicker.svelte",
  //   output: {
  //     sourcemap: true,
  //     format: "iife",
  //     name: "app",
  //     file: "public/build/bundle.js",
  //   },
  output: [
    { file: pkg.module, format: "iife" },
    { file: pkg.main, format: "iife", name: "Name" },
  ],
  plugins: [svelte(), css({ output: "bundle.css" }), resolve()],
};
