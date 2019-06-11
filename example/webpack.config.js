const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const copyRules = [
  {
    from: __dirname + '/src/index.html',
    to: __dirname + '/dist/index.html'
  }
]

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },
  plugins: [new CopyPlugin(copyRules)]
}
