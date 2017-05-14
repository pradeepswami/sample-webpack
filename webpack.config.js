var path = require('path');
var ExtractText = require('extract-text-webpack-plugin');

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
    plugins : [
        new ExtractText('main-style.css')
    ],
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
            use: ExtractText.extract(['css-loader', 'autoprefixer-loader'])
          },
          {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ExtractText.extract(['css-loader','autoprefixer-loader','less-loader'])
          }
      ]  
        
    },
    
    resolve : {
        extensions: ['.js', '.es6']
    },
    
    watch: true
};
