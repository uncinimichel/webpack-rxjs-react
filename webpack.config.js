var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        __dirname + '/lib/main.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    plugins: [  
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loaders: ["babel"], 
                exclude: /node_modules/,
            },
            { 
                test: /\.css$/, 
                loader: "style!css" 
            }
        ]
    }
};