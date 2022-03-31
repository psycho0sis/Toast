import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import path from "path";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

const root = path.resolve(__dirname);

export default {
  input: "src/index.jsx",
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    postcss({
      extensions: [".css"]
    }),
    image(),
    alias({
      resolve: ["*", ".js", ".jsx", ".svg"],
      entries: [
        {
          find: "@",
          replacement: path.resolve(root, "./src"),
        },
      ],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      exclude: "./node_modules/**",
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "dist"],
      historyApiFallback: true,
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ],
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
    assetFileNames: "[name]-[hash][extname]",
  },
};