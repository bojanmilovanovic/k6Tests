import AuthTestToken from "../../libraries/AuthTestToken.js";
import papaparse from "../../libraries/papaparse.js";
import { check, fail } from "k6";
import http from 'k6/http';

const environment = JSON.parse(open("../../environments/environments.json")).activeEnv;
const urlBase  	  = JSON.parse(open("../../environments/"+environment)).baseBrokerageURL;
const tenantID    = JSON.parse(open("../../environments/"+environment)).tenandID;
const tokenBuilder = new AuthTestToken();

export const options = {
		stages: [
	    { duration: "2s", target: 3 }
	  ]
};

export default function() {	
	let tokens = tokenBuilder.getAllTokens();	
	let URL 	= urlBase+"/brokerage/orders/"+tenantID+"/v1/orders";
	let res = http.get(URL, {
		headers: {"Authorization": "Bearer "+tokens[__VU],
				  "Accept": "application/hal+json",
				  "Content-Type": "application/json"},
	});
	let status = res.status;
	check(res, {
		"Status is 200": r => r.status === 200
	});

	for (var i = 0; i < tokens.length; i++) {
		tokenBuilder.removeToken(tokens[i])
	};	
};