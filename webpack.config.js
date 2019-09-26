const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/dist/',
  },

  devtool: 'source-map',

  devServer: {
    port: 3030,
    historyApiFallback: true,
    inline: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
