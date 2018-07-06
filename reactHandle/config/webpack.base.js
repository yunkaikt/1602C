var path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")
var webpack = require("webpack")

module.exports = {
    entry: path.join(__dirname, "../src/main.jsx"),
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[id]-[name]-[hash].js"
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, '../src')], // 指定检查的目录,
                exclude: [path.resolve(__dirname, '../node_modules')],
                options: {
                    root: true,
                    parser: 'babel-eslint',
                    parserOptions: {
                        sourceType: 'module'
                    },
                    env: {
                        browser: true,
                    },
                    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
                    extends: 'standard',
                    // required to lint *.vue files
                    plugins: [
                        'html'
                    ],
                    'rules': {
                        "quotes": ["error", "single"], //字符串必须使用单引号
                        "semi": [2, "always"], //语句强制分号结尾(可选)
                    }
                }
            },
            {
                test: /\.js|.jsx$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            // "env",
                            ["env", {
                                modules: false
                            }],
                            // "stage-0",
                            "react",
                        ],
                        plugins: [
                            ["transform-runtime",
                                {
                                    "helpers": false,
                                    "polyfill": false,
                                    "regenerator": true,
                                    "moduleName": "babel-runtime",
                                }
                            ],
                            "transform-react-jsx",
                        ]
                    }
                }]
            },

            {
                test: /\.(jpg|png|gif|ttf|woff|eot|svg)$/,
                use: ["url-loader"]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: config.base.templatePath,
            minify: config.base.htmlMinify
        })
    ]
}