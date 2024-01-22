const path = require ('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './Client/source/index.js',

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './Client/source/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                        presets:["@babel/preset-react", "@babel/preset-env"]
                    }
                },
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]}]},
    resolve: {
        extensions: [".js", ".jsx"]
    },

    devServer: {
        host: 'localhost',
        port: 8083,
        // watchContentBase: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: '/',
        },
        proxy: {
            '/': 'http://localhost:3000/',
        }
    },


}