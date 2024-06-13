const express = require('express');
const router = express.Router();

const knex = require("knex")
const knexConfig = require("../knexfile")
const axios = require('axios');
require('dotenv').config(); 


// route "/mapdata"

// GET strava api key using  client id and client secret

async function getApiKey(clientId, clientSecret, refreshToken) {
    console.log("jeeeeee")
    console.log(clientId, clientSecret, refreshToken);
    try {
        const response = await axios.post('https://www.strava.com/oauth/token', null, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            }
        });
        console.log('Response data:', response.data);
        return response.data.access_token;
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request data:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw new Error('Failed to get API key');
    }
       
}

const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;
const googleAPI = process.env.GOOGLE_API_KEY;





router.get("/mapdata", async (req, res) => {
    // add location(longtitude and latitude) and apiKey to the response
    try {
        console.log("jeeeee     googleAPI      ", process.env.GOOGLE_API_KEY )
        const StravApiKey = await getApiKey(clientId, clientSecret, refreshToken);
        res.json({
           
            location: {
                lat: 49.2827,
                lng: -123.1207,
            },
            
            stravaApiKey: StravApiKey
        });

    }
    catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
   

});

module.exports = router;
