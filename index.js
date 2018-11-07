var express = require("express");
var app = express();
app.use(express.static("src")); // myApp will be the same folder name.
app.get("/*", function (req, res,next) {
 res.redirect("/"); 
});

app.listen(8060, "localhost");
console.log("MyProject Server is Listening on port 8060");