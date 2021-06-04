const express = require( 'express' )
const path = require( "path" );
const { sayHello } = require( './handler' )

const app = express()
const port = 3000
app.use( express.static( 'public' ) )

// api
app.get( '/', sayHello )



// route
app.get( '/home', ( req, res ) => {
    let indexPath = path.join( __dirname, "../view/index.html" );
    res.sendFile( indexPath );
} )


// server start
app.listen( port, () => {
    console.log( 'Listening' )
} )
