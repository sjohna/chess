const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        devMiddleware: {
            writeToDisk: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "tailwindcss",
                                        {},
                                    ],
                                    [
                                        "autoprefixer",
                                        {},
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/'
                    }
                },
                exclude: /node_modules/
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: './src/index.html',
                    to: 'index.html',
                    toType: 'file',
                }
            ]
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};