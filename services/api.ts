import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/character/1'

async function getCharacter(){
    let response = await axios.get(baseUrl)
    console.log(response.data)
}
