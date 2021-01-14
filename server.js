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
const customers = [
  {
    name: "Mary",
    phone: "555-555-2221",
    email: "mary@email.com",
    id: "23"
  },
  {
    name: "Kate",
    phone: "555-555-3901",
    email: "kate@email.com",
    id: "12"
  },
  {
    name: "John",
    phone: "555-555-2891",
    email: "john@email.com",
    id: "56"
  },
  {
    name: "Isabel",
    phone: "555-555-3189",
    email: "isabel@email.com",
    id: "06"
  },
  {
    name: "Kurache",
    phone: "555-555-8731",
    email: "kurache@email.com",
    id: "52"
  },
  {
    name: "Pola",
    phone: "555-555-7628",
    email: "pola@email.com",
    id: "33"
  }
];

app.post("/api/tables", function(req, res) {
  if (tables > 5) {
    app.post("/api/waitlist", function(req, res) {
      const newWaitlist = req.body;
      waitlist.push(newWaitlist);
      console.log(newWaitlist);
    });
  } else {
    const newTable = req.body;
    tables.push(newTable);
  }
});

//HTML ROUTES
//ROUTE FOR HOME
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
//ROUTE FOR TABLES
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
//ROUTES FOR RESERVE
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//API ROUTES
//GET ALL TABLE DATA
//CREATE TABLE/RESERVATION
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

//LISTEN ON THE PORT
app.listen(PORT, function() {
  console.log(`app listening on http://localhost:${PORT}`);
});
