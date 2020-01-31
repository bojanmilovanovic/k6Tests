import http from "k6/http";
import papaparse from "../libraries/papaparse.js";


const tokenFile = JSON.parse(open("MDBk8sTestToken.json"));
const tokenBody = JSON.stringify(tokenFile);
const csvData = papaparse.parse(open("users.csv"), {header: true});

export default class AuthTestToken{	
		
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}
	
  getToken() {
    let params = { headers: { "Content-Type": "application/json" } };
    let response = http.post(this.baseUrl, tokenBody, params);
    if (response.status != 200) {
      throw new Error("Not able to acquire test token without scope");
	    }
	  return response.body;
	}
  
  getTokenForContract(contractID) {
    let params = { headers: { "Content-Type": "application/json" } };
    let body = tokenBody.replace(/1000061501/g, contractID);
    let response = http.post(this.baseUrl, body, params);
    if (response.status != 200) {
      throw new Error("Not able to acquire test token without scope");
	  }
	  return response.body;
	}
  
	getAllTokens() {	
    let params = { headers: { "Content-Type": "application/json" } };
		let contractsTypeFirstTokens = [];
	  csvData.data.forEach(users => {
	    let contractID = users["First"];
	    this.getTokenForContract(contractID);
	    contractsTypeFirstTokens.push(this.getTokenForContract(contractID));
	  });
	  return contractsTypeFirstTokens;		
	}	
	  
  getTokenWithoutScope() {
    let body = JSON.stringify({ "scope": [ "read", "write" ] });
    let params = { headers: { "Content-Type": "application/json" } };
    let response = http.post(this.baseUrl, body, params);
    if (response.status != 200) {
      throw new Error("Not able to acquire test token without scope");
    }
    return response.body;
  }
		
  removeToken(token) {
    let response = http.get(this.baseUrl + "-session-invalidate", { headers: { "Authorization": "Bearer " + token }});
    if (response.status != 200) {
      console.error("Not able to invalidate test token");
    }
  }
  
  
}
