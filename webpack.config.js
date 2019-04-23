var path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //Reads js and jsx files
        loader: "babel-loader" //Compiles ES6 and jsx into common js
      },
      {
        test: /\.(css|scss)$/, //Reads css and scss files
        use: [
          {
            loader: "style-loader" //creates style node from JS strings
          },
          {
            loader: "css-loader" //translates CSS into common js
          },
          {
            loader: "sass-loader" //complies Sass to css
          }
        ]
      }
    ]
  }
}