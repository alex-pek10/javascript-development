document.querySelector('#get-joke').addEventListener('click', getJoke);

function getJoke(e) {
  const xhr = new XMLHttpRequest();

  xhr.open(
    'GET',
    'http://api.icndb.com/jokes/random?firstName=Alex&lastName=Myers&limitTo=[nerdy]',
    true
  );

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      const joke = response.value.joke;

      document.querySelector('#joke').innerHTML = `“${joke}”`;
    }
  }

  xhr.send();

  e.preventDefault();
}
