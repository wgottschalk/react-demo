http = require "http"
path = require "path"
fs = require "fs"

server = http.createServer (req, res) ->
  if req.url == "/"
    fs.readFile "#{__dirname}/../../src/client/index.html", (err, data) ->
      if err then console.error(err)
      res.writeHead(200,
        "Content-Type": "text/html"
        "Content-Length": data.length)
      res.write data
      res.end()

  if req.url == "/index.js"
    fs.readFile "#{__dirname}/../client/index.js", (err, data) ->
      console.error(err) if err
      res.writeHead 200,
        "Content-Type": "application/javascript"
        "Content-Length": data.length
      res.write data
      res.end()



server.listen(3000, () -> console.log("server is running on port 3000"))
