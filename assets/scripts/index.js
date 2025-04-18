document.addEventListener('DOMContentLoaded', () => {
  const xhttp = new XMLHttpRequest()
  xhttp.onload = function () {
    var body = JSON.parse(this.responseText)

    document.querySelector('.joinbox').classList.remove("loading")
    document.querySelector('.server-name').innerHTML = "RobustStation Main"
    
    if (body.success) {
        document.querySelector('.joinbox-stats').innerHTML = body.data.status
        document.querySelector('.join-text').innerHTML = "Click here to join!"
    } else {
        document.querySelector('.joinbox-stats').innerHTML = ""
        document.querySelector('.join-text').innerHTML = "Server is offline!"
        document.querySelector('.joinbox').classList.add("offline")
    }
    
  }
  // http://92.63.189.146:7824/query
  //xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/http://5.198.125.120:7777/query')
  xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/')
  xhttp.send()
})
