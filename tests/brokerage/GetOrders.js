import AuthTestToken from "../../libraries/AuthTestToken.js";
import papaparse from "../../libraries/papaparse.js";
import { check, fail } from "k6";
import http from 'k6/http';

let urlBase = "http://dbh-brokerage.mdb-master-lat.k8s-core.ebs.crealogix.net";
const tokenBuilder = new AuthTestToken();

export const options = {
		stages: [
	    { duration: "3s", target: 3 },
	    { duration: "5s", target: 6 },
	    { duration: "3s", target: 3 }
	  ]
};

export default function() {	
	let tokens = tokenBuilder.getAllTokens();	
	let URL 	= urlBase+"/brokerage/orders/19901/v1/orders";
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