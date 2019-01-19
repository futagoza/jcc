"use strict";

const cli = require( "@jcc/cli" );
const { expect } = require( "chai" );

describe( "cli should", () => {

    it( "be an async function", async () => {

        expect( cli ).to.be.a( "function" );
        expect( await cli() ).to.equal( void 0 );

    } );

} );
