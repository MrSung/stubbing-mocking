import '@exampledev/new.css';
import './server';

/*
Build the user's list
 */
function buildList(data) {
  console.log(data);
}

/*
Fetch the data on button click
 */
const button = document.getElementById('fetch-btn');

button.addEventListener('click', function() {
  fetch('/api/users/')
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => buildList(json));
});
