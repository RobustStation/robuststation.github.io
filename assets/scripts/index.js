document.addEventListener('DOMContentLoaded', () => {
  const xhttp = new XMLHttpRequest()
  xhttp.onload = function () {
    var body = JSON.parse(this.responseText)

    console.log(body)

    document.querySelector('.joinbox').classList.remove("loading")
    document.querySelector('.main .server-name').innerHTML = "RobustStation Main"
    
    if (body.main?.data) {
        document.querySelector('.main .joinbox-stats').innerHTML = `${body.main.data.players} players online`
        document.querySelector('.main .join-text').innerHTML = "Click here to join!"
    } else {
        document.querySelector('.main .joinbox-stats').innerHTML = ""
        document.querySelector('.main .join-text').innerHTML = "Server is offline!"
        document.querySelector('.main .joinbox').classList.add("offline")
    }

    document.querySelector('.eu .server-name').innerHTML = "RobustStation EU"
    
    if (body.eu?.data) {
        document.querySelector('.eu .joinbox-stats').innerHTML = `${body.eu.data.players} players online`
        document.querySelector('.eu .join-text').innerHTML = "Click here to join!"
    } else {
        document.querySelector('.eu .joinbox-stats').innerHTML = ""
        document.querySelector('.eu .join-text').innerHTML = "Server is offline!"
        document.querySelector('.eu .joinbox').classList.add("offline")
    }
    
  }
  // http://92.63.189.146:7824/query
  //xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/http://5.198.125.120:7777/query')
  //xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/')
  xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/')
  xhttp.send()
})
