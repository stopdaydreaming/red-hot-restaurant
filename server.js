//REQUIRE EXPRESS
const express = require("express");

//CREATE INSTANCE OF EXPRESS
const app = express();

//CREATE PORT FOR THE APP TO RUN
//BUT ALSO LISTEN TO ENVIRONMENT VARIABLES SO WE CAN DEPLOY TO HEROKU
const PORT = process.env.PORT || 3000;

//ADD MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTEN ON THE PORT
app.listen(PORT, function() {
  console.log(`app listening on http://localhost:${PORT}`);
});
