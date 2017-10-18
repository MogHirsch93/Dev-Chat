//Dummy URL https://jsonplaceholder.typicode.com/posts/1
// cb pattern
function makeRequest(url, done, err) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => done(xhr.responseText);
  xhr.onerror = () => err(xhr.statusText);
  xhr.send();
}
/*makeRequest("https://jsonplaceholder.typicode.com/posts/1", obj => console.log(obj), err => console.log("Error: " + err))
undefined
VM384:1 {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  */
}
// promise pattern
function makeRequestPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

/*
Calling a Promise:

makeRequestPromise("https://jsonplaceholder.typicode.com/posts/1")
.then(obj => console.log(obj))
.catch(err => console.log("Error " + err))

Calling an array of promises:
Promise.all(promises).then(response => console.log(response))

 */
