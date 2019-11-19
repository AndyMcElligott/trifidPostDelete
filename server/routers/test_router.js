let express = require('express');

let router = express.Router();

router.get( '/', ( req, res )=>{
    console.log( '/test GET' );
    res.send( 'ribbet' );
}) //end test GET

router.post( '/', ( req, res )=>{
    console.log( '/test POST:', req.body );
    res.sendStatus( 200 );
}) // end test POST

module.exports = router;