var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:  {
    index: [
      './src/client'
    ]
  },

  output: {
    filename: '[name].js',
    path:     path.join(__dirname, 'client')
  },

  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__:     true,
      __SERVER__:     false,
      __PRODUCTION__: true,
      __DEV__:        false
    }),
    new ExtractTextPlugin("styles.css"),

    // NOTE: https://github.com/gaearon/babel-plugin-react-transform#configuration
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    preLoaders: [{
      // NOTE: https://github.com/MoOx/eslint-loader
      exclude: /node_modules/,
      loader:  'eslint-loader',
      test:    /\.jsx?$/
    }],

    postLoaders: [{
      // NOTE: https://github.com/babel/babel-loader
      exclude: /node_modules/,
      loader:  'babel-loader',
      test:    /\.jsx?$/,

      query: {
        presets: [
          'es2015',
          'react'
        ]
      },
    }],

    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.eot/, loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject' },
      { test: /\.woff2/, loader: 'url-loader?limit=100000&mimetype=application/font-woff2' },
      { test: /\.woff/, loader: 'url-loader?limit=100000&mimetype=application/font-woff' },
      { test: /\.ttf/, loader: 'url-loader?limit=100000&mimetype=application/font-ttf' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" }, 
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
      }) }
    ]
  },

  // NOTE: https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    // NOTE: https://webpack.github.io/docs/configuration.html#resolve-extensions
    extensions: [
      '',
      '.js',
      '.jsx'
    ],

    // NOTE: https://webpack.github.io/docs/configuration.html#resolve-root
    root: path.join(__dirname, 'src')
  }
};
