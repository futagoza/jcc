"use strict";

const path = require( "path" );

module.exports = {

    mode: "production",
    entry: {
        "core": require.resolve( "@jcc/core" ),
        "cli": require.resolve( "@jcc/cli" ),
        "js-parser": require.resolve( "@jcc/js-parser" ),
    },
    output: {
        path: path.resolve( __dirname, "packages", "jcc" ),
        filename: "[name].js",
        libraryTarget: "commonjs2",
        sourcePrefix: "  ",
    },
    optimization: {
        nodeEnv: false,
        minimize: false,
    },
    resolve: {
        mainFields: [ "main" ],
    },
    performance: {
        hints: false,
    },
    target: "node",
    node: false,

};
