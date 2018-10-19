class Helper {
	/**
   * API URL.
   */
  static baseURL() {
    return `https://api.foursquare.com/v2`;
  }

  static auth(){
  	const myKeys = {
  		client_id: 'P3VXAFVX3H40BA3NLZFBHK01VULJDRCPBYKO4BU0WMS400VY',
  		client_secret: 'EPFAISQSUEQ0FX1KEZP0AGW1LFEFMXJACO3ZEF4TU33LB4PW',
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
  	).then(response => response.json());
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
