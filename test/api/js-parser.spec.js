"use strict";

const parse = require( "@jcc/js-parser" );
const { expect } = require( "chai" );

describe( "parser should", () => {

    it( "be a function", () => {

        expect( parse ).to.be.a( "function" );

    } );

    it( "return a estree ast", () => {

        const ast = parse( "var a = 1" );

        expect( ast ).to.be.a( "object" );
        expect( ast.type ).to.equal( "Program" );
        expect( Array.isArray( ast.body ) ).to.equal( true );
        expect( ast.body.length ).to.equal( 1 );

    } );

} );
