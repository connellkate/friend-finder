var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("works");
        res.json(friends);
        
        
    })

    app.post("/api/friends", function (req, res) {
        console.log("oops there it is");
        
        
    })
    
}