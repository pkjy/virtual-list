import { terser  } from 'rollup-plugin-terser'

export default {
  input: 'src/virtual-list.js',
  output: [
    { file: "./dist/lib.cjs.js", format: "cjs" },
    { file: "./dist/lib.esm.js", format: "esm" },
    { file: "./dist/lib.min.js", format: "esm" ,plugins:[terser()]},
  ]
};