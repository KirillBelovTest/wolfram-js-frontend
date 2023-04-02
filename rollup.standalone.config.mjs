import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";

export default {

  input: 'Temp/merged.js',
  
  output: {
    dir: 'public/js/export/',
    format: "es",
    strict: false,
    manualChunks: () => 'everything.js'
  },
  plugins    : [
  nodeResolve({
    jsnext: true,
    main: false
  }),
  json(),
  commonjs({transformMixedEsModules:true})
  ]
};