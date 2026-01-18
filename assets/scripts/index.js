document.addEventListener('DOMContentLoaded', () => {
  const xhttp = new XMLHttpRequest()
  xhttp.onload = function () {
    var body = JSON.parse(this.responseText)

    console.log(body)

    document.querySelector('.joinbox').classList.remove("loading")
    
    if (body.main?.data) {
        document.querySelector('.main .little-text').innerHTML = `online with ${body.main.data.players} players`
        document.querySelector('.main .join-text').innerHTML = "Click here to join!"
        document.querySelector('.main.joinbox').classList.add("online")
    } else {
        document.querySelector('.main .little-text').innerHTML = "offline 3:"
        document.querySelector('.main.joinbox').classList.add("offline")
    }
    
  }
  // http://92.63.189.146:7824/query
  //xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/http://5.198.125.120:7777/query')
  //xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/')
  xhttp.open('GET', 'https://ss13-hub.toasterpanic.workers.dev/')
  xhttp.send()
})
