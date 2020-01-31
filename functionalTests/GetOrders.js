import AuthTestToken from "../libraries/AuthTestToken.js";
import papaparse from "../libraries/papaparse.js";
import { check, fail } from "k6";
import http from 'k6/http';

let n = 0;
let urlBase = "http://dbh-brokerage.mdb-master-lat.k8s-core.ebs.crealogix.net";
const tokenBuilder = new AuthTestToken("http://test-token.mdb-master-dev.k8s-core.ebs.crealogix.net/test-token");

export const options = {
	vus: 1,
	duration: "3s"
};

export default function() {	
	let token = tokenBuilder.getToken();	
	let URL 	= urlBase+"/brokerage/orders/19901/v1/orders";
	let res = http.get(URL, {
		headers: {"Authorization": "Bearer "+token,
				  "Accept": "application/hal+json",
				  "Content-Type": "application/json"},
	});
	let status = res.status;
	n++;
	console.log("Request number "+n+" is done with status "+status);
	check(res, {
		"Status is 200": r => r.status === 200
	});
	tokenBuilder.removeToken(token);
};
