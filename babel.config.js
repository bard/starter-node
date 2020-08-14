module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  // babel-node will normally not take the `ignore` field of
  // babel.config.js into account. See:
  // https://github.com/babel/babel/issues/8802
  // To work around it, invoke babel-node `--ignore '[]'` with
  // and provide ignore there. Additionally, nodemon won't
  // pass the `--ignore '[]'` correctly to babel-node. To work
  // around it, wrap babel-node invocation in a package.json
  // script (`start:nowatch`) and run that via nodemon.
  ignore: [/node_modules/],
}
