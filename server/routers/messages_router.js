let express = require('express');

// make new Router
let router = express.Router();

//setup our global messages array
let messages = [];

//We'll use 'router' here to configure things much like we use 'app' in sever.js
// we must remove the '/message' from these urls - the router strips them off


router.delete( '/:index', ( req, res )=>{
    console.log( 'in /messages delete:', req.params.index );
    res.send( 'squeak' );
}) //end delete

router.get( '/', ( req, res )=>{
    console.log( 'in /messages GET' );
    res.send( messages );
}) // end essages

router.post( '/', ( req, res )=>{
    console.log( 'in / POST:', req.body );
    messages.push( req.body );
    console.log( messages );
    res.sendStatus( 200 );
}) // end messages POST



module.exports = router;