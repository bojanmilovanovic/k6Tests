import http from "k6/http";
import papaparse from "../libraries/papaparse.js";
import {environment} from "../environments/Environments.js";

const url           = JSON.parse(open("../environments/"+environment)).tokenURL;
const tokenBodyFile     = JSON.parse(open("../environments/"+environment)).tokenBody;
const tokenBodyFileJSON = JSON.parse(open("../environments/"+tokenBodyFile));
const tokenBodyString   = JSON.stringify(tokenBodyFileJSON);
const contractsFile = JSON.parse(open("../environments/"+environment)).contracts;
const csvData 	    = papaparse.parse(open("../environments/"+contractsFile), {header: true});

export default class AuthTestToken{	
		
	constructor() {
	}
	
  getToken() {
    let params = { headers: { "Content-Type": "application/json" } };
    let response = http.post(url, tokenBody, params);
    if (response.status != 200) {
      throw new Error("Not able to acquire test token without scope");
      }
	  return response.body;
	}
  
  getTokenForContract(contractID) {
    let params = { headers: { "Content-Type": "application/json" } };
    let body = tokenBodyString.replace(/9999999999/g, contractID);
    let response = http.post(url, body, params);
    if (response.status != 200) {
      console.log(response.status+" ->"+response.body);
      throw new Error("Not able to acquire test token without scope");
    }
	  return response.body;
	}
  
	getAllTokens() {	
		let contractsTypeFirstTokens = [];
	  csvData.data.forEach(users => {
      let contractID = users["First"];
	    contractsTypeFirstTokens.push(this.getTokenForContract(contractID));
	  });
	  return contractsTypeFirstTokens;		
	}	
	  
  getTokenWithoutScope() {
    let body = JSON.stringify({ "scope": [ "read", "write" ] });
    let params = { headers: { "Content-Type": "application/json" } };
    let response = http.post(url, body, params);
    if (response.status != 200) {
      throw new Error("Not able to acquire test token without scope");
    }
    return response.body;
  }
		
  removeToken(token) {
    let response = http.get(url + "-session-invalidate", { headers: { "Authorization": "Bearer " + token }});
    if (response.status != 200) {
      console.error("Not able to invalidate test token");
    }
  }
  
  
}
