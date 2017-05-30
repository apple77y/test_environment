var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './test/spec/Spinbox.spec.js',

    output: {
        path: path.resolve(__dirname, 'test'),
        filename: 'test.bundle.js'
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['es2015']
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
