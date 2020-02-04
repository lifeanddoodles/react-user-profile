const path = require('path');
const fs = require('fs');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const publicPath = '/';
const publicUrl = '';
// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: publicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, { PUBLIC_URL: publicUrl }),
    new ManifestPlugin({
      publicPath: publicPath,
      generate: (seed, files) => {
        const manifestFiles = files.reduce(function(manifest, file) {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        return {
          files: manifestFiles
        };
      }
    }),
    new Dotenv({
      path: './.env'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader' //1. Turns sass into css
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    host,
    port: process.env.PORT
  }
});
