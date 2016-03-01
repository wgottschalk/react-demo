http = require "http"
fs = require "fs"

server = http.createServer (req, res) ->
  send res, "#{__dirname}/../../src/client/index.html", "text/html"     if req.url == "/"
  send res, "#{__dirname}/../client/index.js", "application/javascript" if req.url == "/index.js"
  send res, "#{__dirname}/../../src/client/styles.css", "text/css"      if req.url == "/styles.css"
  return
  
send = (res, url, ctype) ->
  fs.readFile url, (err, data) ->
    console.error err if err
    res.writeHead 200,
      "Content-Type": ctype
      "Content-Length": data.length
    res.write data
    res.end()

server.listen 3000, () -> console.log "server is running on port 3000"
