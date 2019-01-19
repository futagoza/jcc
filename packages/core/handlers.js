"use strict";

module.exports = {

    "text/javascript": {

        extensions: [ ".js", ".jsx", ".mjs" ],
        parser: require.resolve( "@jcc/js-parser" ),
        targets: "all",

    },

};
