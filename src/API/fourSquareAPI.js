//  DELETE THIS OTHER ONE, had a 405 error, I think it's something with Response for preflight does not have HTTP ok status. Uncaught (in promise) TypeError: Failed to fetch
const api = `https://api.foursquare.com/v2`

// Generate a unique token for storing data 
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

function auth(){
  const myKeys = {
    client_id: 'RT5GOOH1MH5QC2J1F05CZ0M5IJO24DHIYD1QFV1IZNWDSXMV',
    client_secret: 'VPFPPXYHLMCV0W3X1SE104QZDXOPQ40WIPZZXMPS0M5ZOWFQ',
    v: '20181012 '
  }
  return Object.keys(myKeys)
    .map(key => `${key}=${myKeys[key]}`)
    .join("&")
}

function URLBuilder(urlParams){
  if(!urlParams){
    return ""
  }
  return Object.keys(urlParams)
    .map(key => `${key}=${urlParams[key]}`)
    .join("&")  
}

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

export default class SquareAPI2 {
  static getVenues(urlParams) {
    return fetch(`${api}/venues/search/?${auth()}&${URLBuilder(urlParams)}`, { 
      method: 'GET',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      } 
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(data=> data.response.venues)
      .catch(error => console.log(error))
  }

}
