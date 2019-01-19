"use strict";

const jcc = require( "@jcc/core" );
const { expect } = require( "chai" );

describe( "jcc.handlers should", () => {

    it( "have at least 1 handler", () => {

        expect( Object.keys( jcc.handlers ).length ).to.be.above( 0 );

    } );

    it( "have a valid default js handler", () => {

        expect( jcc.handlers.hasOwnProperty( "text/javascript" ) ).to.equal( true );
        expect( require( jcc.handlers[ "text/javascript" ].parser ) ).to.be.a( "function" );

    } );

} );
