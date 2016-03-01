http = require "http"
path = require "path"

server = http.createServer (req, res) ->
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end "Hello World!"

server.listen(3000, ()-> console.log("server is running on port 3000"))
