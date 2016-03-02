sampleText = "This is an example of a description of a movie. The description should be two to three sentences long. The text should truncate if the descr..."
$.ajax
  url: "/movies/in-theaters"
  type: "GET"
  crossDomain: true
.done (res) ->
  res.forEach (obj, index) ->
    buildCard obj, index
    $(".card").each (i) ->
      $(this)
        .delay 200*i
        .css "opacity":"0"
        .animate "opacity":"1.0", 600
    $("#main-content").on "click",".card", (event) ->
        event.stopImmediatePropagation()
        generateModal(this)
.fail (err) ->
  console.error err

buildCard = (movie, index) ->
  card = $("<div/>").addClass("card row").attr "id", "item-#{index+1}"
  card.append $("<img src=#{movie.url}/>").addClass "shrink column"

  content = $("<div/>").addClass "column content"
  content.append $("<p class='title'/>").text movie.title
  content.append $("<p/>").text "Rating: #{movie.rating or "no rating"}"
  content.append $("<p class='description'/>").text sampleText

  card.append content
  $("#main-content").append card
generateModal = (html) ->
  console.log html
