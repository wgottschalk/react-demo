var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
app.use(express.static(__dirname + "/"));
app.get("/", function(req, res) {
  res.sendFile("index.html");
})

app.listen(port, function() {
  console.log("running on port " + port);
})
