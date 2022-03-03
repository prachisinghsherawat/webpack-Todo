const path = require("path")

module.exports = {

    entry : "./src/index.js",
    output : {path : path.join(__dirname,"build"), filename : "main.js"},
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },

          {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            type: 'asset/resource',
          },
        
        ],
    },
}