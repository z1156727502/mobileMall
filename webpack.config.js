// const  MiniCssExtractPlugin  =  require("mini-css-extract-plugin");

// const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: {
        index: './src/js/main.js',
        info: './src/js/info.js'
    },
    output: {
        filename: "[name].js",
        // chunkFilename: './js/[name]',
        path: __dirname + "/out",
        publicPath: "http://localhost:8080/out"
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        },{//js文件babel-loader
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader' , 'less-loader']
            },
            {
                test: /\.jpg|png|gif|svg|bmp$/,
                use: ['url-loader?limit=8192&name=/img/[name].[ext]']
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // }),

        // new webpack.optimizition.splitChunks()
        // new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Hello World',
        //     template: '.../index.html' //模板地址
        // }),
        // new Webpack.ProvidePlugin({ //下载Jquery库
        //     $: 'jquery'
        // })
    ],
    // optimizition: 
    // {
        // minimize: ''
    //     splitChunks: {
    //         cacheGroups: { // 单独提取JS文件引入html
    //             toll: { // 键值可以自定义
    //                 chunks: 'initial', // 
    //                 name: 'tool', // 入口的entry的key
    //                 enforce: true // 强制 
    //             },
    //             // bbb: {
    //             //     chunks: 'initial',
    //             //     name: 'angular',
    //             //     enforce: true
    //             // }
    //         }
    //     }
    // }
}