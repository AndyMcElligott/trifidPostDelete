// requires
const express = require( 'express' );
const app = express();
// NEEDED FOR A POST (req.body)
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
// also needed for POST
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
    // Look for a PORT FROM THE RUNNING PROCESS,
    // If there isn't one (it's undefined or falsy)
    // then use our default port 5000.
    const PORT = process.env.PORT || 5000;

// server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up

//set up Routers
app.get( '/', ( req, res )=>{
    console.log( '/test GET' );
    res.send( 'ribbet' );
}) //end test GET

app.post( '/', ( req, res )=>{
    console.log( '/test POST:', req.body );
    res.sendStatus( 200 );
}) // end test POST

//When requests come in for /messages send to messagesRouter
const messagesRouter = require('./routers/messages_router');
app.use('/messages', messagesRouter);

//When requests come in for /test send to messagesRouter
const testRouter = require('./routers/test_router');
app.use('/test', testRouter);

