const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const pool = require("./db");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json()); //req.body
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROUTES//

// REGISTER PAGE
app.post('/register', async(req,res) => {
    try {
        const {first_name, last_name, user_email, user_pass} = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (firstName,lastName,email,password) VALUES(?,?,?,?)",[first_name,last_name,user_email,user_pass]
        );

        res.json(newUser)
    } catch (err){
        console.error(err.message);
    }
});

//create diary entry 

//get a diary entry

//get all diary entries

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
