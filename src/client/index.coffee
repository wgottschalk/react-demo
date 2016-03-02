console.log "this is a test"

$.ajax
  url: "/movies/in-theaters"
  type: "GET"
  crossDomain: true
  success: (res) ->
    console.log(res.body)
