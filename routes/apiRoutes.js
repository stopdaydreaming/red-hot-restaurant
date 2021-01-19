const tableData = require("../data/tableData");
const waitData = require("../data/waitData");

module.exports = function(app) {

//API ROUTES
//GET ALL TABLE DATA
app.get("/api/tables", function(req, res) {
    res.json(tableData);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitData);
});

//CREATE TABLE/RESERVATION
app.post("/api/tables", function(req, res) {
    if(tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    }
    else {
        waitData.push(req.body);
        res.json(false);
    }
});

app.post("/api/clear", function(req, res) {

    //empty out the arrays of data
    tableData.length = 0;
    waitData.length = 0;

    res.json({
        ok: true
    });
})
}

