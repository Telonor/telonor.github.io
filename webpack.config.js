const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./assets/styles/style.css",
});

module.exports = {
    entry: [
        './src/scripts/app.js'
    ],
    output: {
        filename: './assets/scripts/bundle.js'
    },

    //.scss to .css
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                // extract resulting .css from resulting .js to separate file
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                // yep, assume every .js file as es6+
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ]
            },
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "react"]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        extractSass
    ]
};