const path = require('path');
const webpack = require('webpack');
// MiniCssExtractPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: {
        main: './src/js/main.js',
        selcets: './src/js/selcets.js',
        index: './src/js/index.js',
        aboutUs_recruit: './src/js/aboutUs_recruit.js',
        news: './src/js/news.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
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
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024
                    }
                },
                generator: {
                    filename: pathData => {
                        const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
                        return `${filepath}/[name][ext]`;
                    }
                }
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
            chunks: ['main', 'index']
        }),
        // 關於我們：公司簡介
        new HtmlWebpackPlugin({
            template: './src/html/ch/aboutUs_introduction.html',
            filename: 'ch/aboutUs_introduction.html',
            minify: false,
            chunks: ['main']
        }),
        // 關於我們：經營團隊
        new HtmlWebpackPlugin({
            template: './src/html/ch/aboutUs_team.html',
            filename: 'ch/aboutUs_team.html',
            minify: false,
            chunks: ['main']
        }),
        // 關於我們：專業認證
        new HtmlWebpackPlugin({
            template: './src/html/ch/aboutUs_authentication.html',
            filename: 'ch/aboutUs_authentication.html',
            minify: false,
            chunks: ['main']
        }),
        // 關於我們：營業據點
        new HtmlWebpackPlugin({
            template: './src/html/ch/aboutUs_map.html',
            filename: 'ch/aboutUs_map.html',
            minify: false,
            chunks: ['main']
        }),
        // 關於我們：人才招募
        new HtmlWebpackPlugin({
            template: './src/html/ch/aboutUs_recruit.html',
            filename: 'ch/aboutUs_recruit.html',
            minify: false,
            chunks: ['main', 'aboutUs_recruit']
        }),
        // 最新消息：成功案例
        new HtmlWebpackPlugin({
            template: './src/html/ch/cases_lists.html',
            filename: 'ch/cases_lists.html',
            minify: false,
            chunks: ['main', 'news']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/ch/cases_content.html',
            filename: 'ch/cases_content.html',
            minify: false,
            chunks: ['main']
        }),
        // 最新消息：新聞中心
        new HtmlWebpackPlugin({
            template: './src/html/ch/news_lists.html',
            filename: 'ch/news_lists.html',
            minify: false,
            chunks: ['main', 'news']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/ch/news_content.html',
            filename: 'ch/news_content.html',
            minify: false,
            chunks: ['main']
        }),
        // 最新消息：影音專區
        new HtmlWebpackPlugin({
            template: './src/html/ch/video_list.html',
            filename: 'ch/video_list.html',
            minify: false,
            chunks: ['main', 'news']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/ch/video_content.html',
            filename: 'ch/video_content.html',
            minify: false,
            chunks: ['main']
        }),
        // 最新消息：行銷活動
        new HtmlWebpackPlugin({
            template: './src/html/ch/events_lists.html',
            filename: 'ch/events_lists.html',
            minify: false,
            chunks: ['main', 'news']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/ch/events_content.html',
            filename: 'ch/events_content.html',
            minify: false,
            chunks: ['main']
        }),
        // 最新消息：報告書專區
        new HtmlWebpackPlugin({
            template: './src/html/ch/statements_lists.html',
            filename: 'ch/statements_lists.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/ch/statements_content.html',
            filename: 'ch/statements_content.html',
            minify: false,
            chunks: ['main', 'selcets']
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "./src/images", to: "images" },
        //     ],
        // })
    ],
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true
    },
    devtool: 'source-map'
};