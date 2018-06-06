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
    },
    success: function(result) {
      loglength = $("#log").children().length
      date = Date()
      $("#bigstatus").html("lat: " + lat + "<br> lng: " + lng)
      let emphasis_open = ""
      let emphasis_close = ""
      if (changed) {
        //$("#log").prepend("<div><small>changed</small></div>")
        emphasis_open = '<b style="color:green">'
        emphasis_close = "</b>"
      }
      //$("#log").prepend("<div><small>" + emphasis_open + lat + " " + lng + " " + counter + " " + date + emphasis_close + "</small></div>")
      $("#log").prepend("<div><small>" + emphasis_open + result " " + counter + " " + date + emphasis_close + "</small></div>")
      if (loglength > showmax) {
        $("#log").find("div:nth-last-child(-n+1)").remove()
      }
      counter += 1
      changed = false
      //console.log("success")
    },
    error: function(result) {
      $("#log").prepend("<div>" + result + "</div>")
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
