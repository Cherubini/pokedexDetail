const urlSearchParams = new URLSearchParams(window.location.search);

// console.log(urlSearchParams)

const type = urlSearchParams.get('pokemon');

console.log(type);