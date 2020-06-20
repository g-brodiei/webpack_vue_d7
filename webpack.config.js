var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin') // https://vue-loader.vuejs.org/guide/#manual-setup

module.exports = (env, argv) => {
  const isDevMode = argv.mode === "development";
  return {
      mode: isDevMode ? "development" : "production", // mode of webpack, development|production|none.
      devtool: isDevMode ? "source-map" : false, // sourcemap doc https://webpack.js.org/configuration/devtool/
      entry: ['./src/js/main.js', './src/scss/main.scss'],
      output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ],
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  modules: false,
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                }
              }
            ]
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                // the "scss" and "sass" values for the lang attribute to the right configs here.
                // other preprocessors should work out of the box, no loader config like this necessary.
                'scss': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ],
                'sass': [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader?indentedSyntax'
                ],
                'png': [
                  'file-loader'
                ]
              }
              // other vue-loader options go here
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': isDevMode ? JSON.stringify('development') : JSON.stringify('production')
          }
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          proxy: "https://sitename.example/"
        }),
      ],
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
      },
      devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
      },
      performance: {
        hints: false
      },
      optimization: {
        splitChunks: {
          chunks: "all",
        },
        minimizer: [
          new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
              compress: {},
              warnings: false,
              mangle: true,
              output: {
                comments: false,
              },
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
          })
        ]
      }
    }
  }
