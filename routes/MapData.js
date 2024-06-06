const express = require('express');
const router = express.Router();

const knex = require("knex")
const knexConfig = require("../knexfile")


// route "/mapdata"
router.get("/mapdata", async (req, res) => {
    // add location(longtitude and latitude) and apiKey to the response
    try {
        
        res.json({
            location: {
                lat: 49.2827,
                lng: -123.1207
            },
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        });

    }
    catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
   

});

module.exports = router;

