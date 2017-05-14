var path = require('path');

module.exports = {
    context: path.resolve(__dirname, "app"),
    entry: ["./utils.js","./app.js"],
    output: {
        path: path.resolve(__dirname, "dist/assets/js/"),
        pathinfo: true,
        publicPath: "/assets/js/",       
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public")        
    },
    module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['jshint-loader'],
            enforce: 'pre'  
          },
          {
            test: /\.es6$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [ 'style-loader','css-loader' ]
          }
      ]  
        
    },
    
    resolve : {
        extensions: ['.js', '.es6']
    },
    
    watch: true
};
