http = require "http"
fs = require "fs"
request = require "request"
cheerio = require "cheerio"
data = require './data.js'


server = http.createServer (req, res) ->
  console.log req.url
  send res, "#{__dirname}/../../src/client/index.html", "text/html"     if req.url == "/"
  send res, "#{__dirname}/../client/index.js", "application/javascript" if req.url == "/index.js"
  send res, "#{__dirname}/../../src/client/styles.css", "text/css"      if req.url == "/styles.css"
  getMovies req, res, data if req.url == "/movies/in-theaters" and req.method == "GET"

  if req.url.slice(1, 7) == "images"
    file = req.url.slice 8, -1
    uri = "#{__dirname}/../../images/#{file}"
    fs.readFile uri, (err, data)->
      if err
        console.error err
        res.writeHead 404
        res.end err

      res.writeHead 200,
        "Content-Type": "image/jpeg"
      res.write data
      res.end()

  return

send = (res, url, ctype) ->
  fs.readFile url, (err, data) ->
    console.error err if err
    res.writeHead 200,
      "Content-Type": ctype
      "Content-Length": data.length
    res.write data
    res.end()

getMovies = (req, res, data) ->
  if data.length != 0
    res.writeHead 200,
      "Content-Type": "application/json"
    json = JSON.stringify data
    res.write json
    res.end()

  else request "http://www.imdb.com/movies-in-theaters/", (err, response) ->
    $ = cheerio.load(response.body)
    $(".list_item").each (i, ele) ->
      data.push(
        title: $(ele).find("h4").text().trim()
        rating: $(ele).find("strong").text().replace "The Buzz", ""
      )
    res.writeHead 200,
      "Content-Type": "application/json"
    json = JSON.stringify data
    res.write json
    res.end()
  return

PORT = process.env.PORT || 3000
server.listen PORT, () -> console.log "server is running on port 3000"
