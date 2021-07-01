const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname,"app", "index.html"),
      filename: 'index.html'
    }),
  ]
}