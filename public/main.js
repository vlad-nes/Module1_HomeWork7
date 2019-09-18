class Fetch {
    constructor() { }  
    get(url) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onload = () => {
          resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = () => {
          reject(JSON.parse(xhr.responseText))
        }
        xhr.send()
      })
    } 
    post(url, body) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        xhr.onload = () => {
          resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = () => {
          reject(JSON.parse(xhr.responseText))
        }
        xhr.send(JSON.stringify(body))
      })
    }  
    getByParams(url, param) {
      return apiGET(`${url}/${param}`)
    }
  }


  /////////////
  
  let fetch = new Fetch()
  fetch.get('/users').then(res => console.log(res))
  
  fetch.post('/users', {name: 'Ivan', surname: 'Ivanov'}).then(res => console.log(res))
  
  fetch.getByParams('/users', 'Ivanov').then(res => console.log(res))