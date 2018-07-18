let showmax = 10
let counter = 0
let last_lat = null
let last_lng = null

function loggit(lat, lng) {
  //console.log(lat, lng)
  let changed = false
  if (last_lat != lat || last_lng != lng ) { changed = true }
  last_lat = lat
  last_lng = lng
  $.ajax({
    //url: "/robots.txt?geo," + lat + "," + lng,
    url: "/api/pinto",
    method: "POST",
    data: {
      lat: lat,
      lng: lng,
      clr: "000000",
    },
    success: function(result) {
      loglength = $("#log").children().length
      date = Date()
      $("#bigstatus").html("lat: " + lat + "<br> lng: " + lng)
      let logRow = $("<div>", {"class": "row"})


      let count = $("<small>")
      count.html("[" + counter + "] ")
      count.css("color", "#" + result.c)
      count.css("background-color", "gray")
      logRow.append(count)

      let logText = $("<small>")
      logText.html(JSON.stringify(result))
      logRow.append(logText)
      if (changed) {
        logText.css("color", "green")
      }


      $("#log").prepend(logRow)
      if (loglength > showmax) {
        $("#log").find("div:nth-last-child(-n+1)").remove()
      }
      counter += 1
      changed = false
    },
    error: function(result) {
      $("#log").prepend('<div style="color:red">' + JSON.stringify(result) + "</div>")
    },
  })
}

/*
navigator.geolocation.getCurrentPosition(function(position) {
  loggit(position.coords.latitude, position.coords.longitude)
})
*/

let watchID = navigator.geolocation.watchPosition(function(position) {
  loggit(position.coords.latitude, position.coords.longitude)
})
