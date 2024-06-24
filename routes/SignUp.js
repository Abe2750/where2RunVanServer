const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require("../knexfile");

const db = knex(knexConfig);

router.post('/', async (req, res) => {
    try {
        const { email, password, name, username, id } = req.body;
        const user = await db('users').insert({ email, password, name, username, id });
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;