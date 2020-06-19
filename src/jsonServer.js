import '@exampledev/new.css';

/**
 * Render list
 */
function renderList({ el, html }) {
  el.innerHTML = html;
}

/**
 * Fetch and set data
 */
async function fetchAndSetData({ el, endpoint }) {
  const response = await fetch(endpoint);
  if (!response.ok) throw Error(response.statusText);
  const itemArray = await response.json();
  const htmlToInsert = itemArray
    .map(
      item => `
          <h2>${item.name}</h2>
          <ul>
            ${item.albums.map(album => `<li>${album}</li>`).join('')}
          </ul>
        `
    )
    .join('');
  renderList({ el, html: htmlToInsert });
}

/**
 * Fetch the data on button click
 */
document.addEventListener('DOMContentLoaded', () => {
  const buttonBlues = document.getElementById('button-blues');
  const buttonRock = document.getElementById('button-rock');
  const output = document.getElementById('output');

  buttonBlues.addEventListener('click', () => {
    fetchAndSetData({ el: output, endpoint: '/blues/' });
  });

  buttonRock.addEventListener('click', () => {
    fetchAndSetData({ el: output, endpoint: '/rock/' });
  });
});
