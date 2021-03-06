/**
* ACKNOWLEDGEMENTS: Forrest Walker Connecting to Foursquare https://www.youtube.com/watch?v=Dj5hzKBxCBI&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=3
*
* Tried implementing the connection as seen in "./fourSquareAPI" based on my reads 
* project but was unable to do so
*
*/


class Helper {
	/**
   * API URL.
   */
  static baseURL() {
    return `https://api.foursquare.com/v2`;
  }

  static auth(){
  	const myKeys = {
  		client_id: 'RT5GOOH1MH5QC2J1F05CZ0M5IJO24DHIYD1QFV1IZNWDSXMV',
  		client_secret: 'VPFPPXYHLMCV0W3X1SE104QZDXOPQ40WIPZZXMPS0M5ZOWFQ',
  		v: '20181019 '
  	}
  	return Object.keys(myKeys)
  		.map(key => `${key}=${myKeys[key]}`)
  		.join("&")
  }

  static headers(){
  	return{
  		 Accept: "application/json"
  	}
  }

  static URLBuilder(urlParams){
  	if(!urlParams){
  		return ""
  	}
  	return Object.keys(urlParams)
  		.map(key => `${key}=${urlParams[key]}`)
  		.join("&")
  	
  }

  static simpleFetch(endPoint, method, urlParams){
  	let requestData = {
  		method,
  		headers: Helper.headers()
  	};
  	return fetch(
  		`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.URLBuilder(
  			urlParams
  		)}`,
  		requestData
  	).then(response => response.json())
      .catch(err => {

        alert('Error While getting data from FourSquare API')
        console.error(err)
      })
    ;
  }
}

export default class SquareAPI {
	static search(urlParams) {
		return Helper.simpleFetch("/venues/search", "GET", urlParams);
	}
	static getVenueDetails(VENUE_ID){
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
	}
	static getVenuePhotos(VENUE_ID){
		return Helper.simpleFetch(`venues/${VENUE_ID}/photos`, "GET");
	}
}
