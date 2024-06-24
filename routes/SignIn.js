const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig);

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Query the database to find the user with the provided email and password
        const user = await db('users')
            .where({
                email: email,
                password: password // Note: For security, consider hashing passwords
            })
            .first();

        if (user) {
            res.json(user); // Return user details on successful signin
        } else {
            res.status(401).json({ error: 'Invalid credentials' }); // Unauthorized if user not found or credentials don't match
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
