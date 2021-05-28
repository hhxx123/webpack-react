const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
module.exports = {
  entry: {
    "about": "./src/component/About/index.js",
    'index': './src/component/Index/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name]-bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ["@babel/plugin-proposal-class-properties"],
              ['import', {libraryName: 'antd', style: 'css'}],
            ],
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },

      {
        test: /\.css$/i,
        //include: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader', options: {
              modules: true
            }
          },
          {loader: 'less-loader'},
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[{
          loader:'url-loader',
         // options:
        }]
      }

    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: '../build/index.html',
        chunks: ['index'],
        template: "./src/component/common/template/template1.html"
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: '../build/about.html',
        chunks: ['about'],
        template: "./src/component/common/template/template1.html"
      }
    ),
  ]
}