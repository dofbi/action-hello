const axios = require('axios');

async function getData() {
    const response = await axios.get('https://futuramaapi.herokuapp.com/api/characters/dr-zoidberg/1');
    const { data } = response;
    const { character, quote } = data[0];
    console.log(`${character} says: ${quote}`);
}

getData();