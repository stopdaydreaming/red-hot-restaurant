//REQUIRE EXPRESS
const express = require("express");
const path = require("path");

//CREATE INSTANCE OF EXPRESS
const app = express();

//CREATE PORT FOR THE APP TO RUN
//BUT ALSO LISTEN TO ENVIRONMENT VARIABLES SO WE CAN DEPLOY TO HEROKU
const PORT = process.env.PORT || 3000;

//ADD MIDDLEWARE
//COPY/PASTE FROM STAR WARS APP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CREATE AN ARRAY OF TABLES
const tables = [];
//CREAT AN ARRAY FOR WAITLIST
const waitlist = [];

//ARRAY OF OBJECTS. OBJECTS SHOULD HAVE
//NAME
//PHONE
//EMAIL
//ID

//HTML ROUTES
//ROUTE FOR HOME
//ROUTE FOR TABLES
//ROUTES FOR RESERVE

//API ROUTES
//GET ALL TABLE DATA
//CREATE TABLE/RESERVATION

//LISTEN ON THE PORT
app.listen(PORT, function () {
  console.log(`app listening on http://localhost:${PORT}`);
});
