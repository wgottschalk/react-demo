sampleText = "This is an example of a description of a movie. The description should be two to three sentences long. The text should truncate if the descr..."
grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]



$.ajax
  url: "/movies/in-theaters"
  type: "GET"
  crossDomain: true
.done (res) ->
  res.forEach (obj, index) ->
    buildCard obj, index
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
  $("#rate-title").remove()
  title = $('.title', html).text()
  $('.modal')
    .css "display", "block"
    .find ".ratings"
    .prepend "<div id='rate-title'>#{title}</div>"

$('#rating-button').on "click", ->
  console.log "a rating was added"
  $('.modal')
    .css "display", "none"
    .find "#rate-title"
    .remove()

document.querySelector 'input'
  .oninput = ->
    $('output').val("#{grades[this.value]}")
