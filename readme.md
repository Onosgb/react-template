# Setting up react typescript starter project with webpack from scratch

1. create the project folder
2. git init
3. create .gitignore file in your root folder - .gitingnore
4. create build folder - build
5. create src forlder - src
6. npm init --y
7. yarn add typescript @types/react @types/react-dom
8. create the app.ts and index.html files in the src folder
9. yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
10. create a .babelrc on the root folder - .babelrc
11. paste the code below on the .babelrc file
    {
    "presets": [
    "@babel/preset-env",
    [
    "@babel/preset-react",
    {
    "runtime": "automatic"
    }
    ],
    "@babel/preset-typescript"
    ]
    }
12. yarn add add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
13. yarn add -D babel-loader
14. create a root folder - webpack and create a file webpack.config.js
15. paste the code below on the webpackconfig.js
    const path = require("path");
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
    entry: path.resolve(**dirname, "..", "./src/index.tsx"),
    resolve: {
    extensions: [".tsx", ".ts", ".js"],
    },
    module: {
    rules: [
    {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: [
    {
    loader: "babel-loader",
    },
    ],
    },
    ],
    },
    output:
    {
    path: path.resolve(**dirname, "..", "./build"),
    filename: "bundle.js",
    },
    mode: "development",
    plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    ],
    };

16. enter the start command on the scripts in package.json file
    "start" : "webpack serve --config wepack/webpack.config.js --open"

# how to add css to the project

1.  yarn add css-loader style-loader
2.  copy and paste this code below inside rules in webpack file
    {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
    }

# How to add image import on the project

1. create a file with the name declearaton.d.ts
2. type the code below in the file
   declare module '\*.png'
3. paste the code below on the webpack file under rules
   {
   test:/\.(?:ico|gif|png|jpg)$/i,
   type: 'asset/resource
   }

# How to add fonts and svg to your app

1. Go to declearation.d.ts file
2. enter the rules below
   declare module '\*.svg'
3. Go to webpack.config.ts file
4. Go to rules
5. enter the code below
   {
   test: /\.(woff(2)?|eot|ttf|svg|)$/,
   type: 'asset/inline',
   }

# Changing the webpack.config.js to webpack.common.js in other for it to accept both production and developement setup.

1. Remove the mode property from the
   webpack file
2. create 3 files in the webpack folder
   webpack.dev.js, webpack.prod.js, webpack.config.js
3. add the dev and prod configuration

# compy and past the code below on the dev config file

    const webpack = require("webpack");
    module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
        "process.env.name": JSON.stringify("Vishwas"),
        }),
    ],
    };

# compy and past the code below on the prod config file

    const webpack = require("webpack");
    module.exports = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
        "process.env.name": JSON.stringify("Codevolution"),
        }),
    ],
    };

# we are going to populate webpack.config.js file which will the common.config file with either the prod or dev config file

1. yarn add -D webpack-merge
2. copy and paste the code below on
   webpack.config.js
   const {merge} = require('webpack-merge');
3. import webpack.common.js in
   webpack.config.js file

   const commonConfig = require('./webpack.common.js')

4. export the merge file as a function in webpack.config.js file

   module.exports = (envVars) => {
   const { env } = envVars;
   const envConfig = require(`./webpack.${env}.js`);
   const config = merge(commonConfig, envConfig);
   return config;
   };

5. Open the package.json file
6. Replace the start script with the code below
   "start": "webpack serve --config webpack/webpack.config.js --env env=dev --open",
7. copy and past the code below and paste under the start script.

   "build": "webpack --config webpack/webpack.config.js --env env=prod --open",

# How to run your project

Development - npm run start

Production - npx serve
