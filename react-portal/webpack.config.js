const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
//   devServer: {
//     inline: false,
//     contentBase: "./dist",
// },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
           "css-loader",
           {
            loader: "sass-loader",
             options:{
              implementation: require("sass"),
            }
          }
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
           "css-loader",
        ],
      },
    ]
  },
//   module: {
//     rules: [
//         {
//             test: /\.jsx?$/,
//             exclude:/(node_modules|bower_components)/,
//             loader: 'babel-loader',
//             query: {
//                 presets: ['es2015', 'react']
//             }
//         }
//     ]
// },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}