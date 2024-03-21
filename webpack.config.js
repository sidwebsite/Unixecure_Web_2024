const path = require('path');
const webpack = require('webpack');
// MiniCssExtractPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ], 
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: false
                }
            }
        ]
    },
    plugins:[
        // css
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        // html
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
            minify: false,
            chunks: ['main']
        }),
    ],
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true
    },
    mode: 'development',    
};