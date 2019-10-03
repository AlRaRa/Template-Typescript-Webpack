const path = require('path');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');


module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                loader: 'url-loader',
                options:{
                    limit: 25000,
                    name:'[name].[ext]'
                }
                }
            ],
        },
        { 
            test: /\.scss$/, 
            loader: [
                "css-loader",
                'sass-loader'
            ]
        }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    plugins:[
        new SimpleProgressPlugin(),
    ],
        
};