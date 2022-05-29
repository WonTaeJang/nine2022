const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: "./js/app.js",
    },
    output: {
        path: path.resolve("./js/dist"),
        filename: "bundle.js",
    },
};