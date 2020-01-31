import AuthTestToken from "../libraries/AuthTestToken.js";
import { check, fail } from "k6";
import http from 'k6/http';

let n = 0;
const tokenBuilder = new AuthTestToken("http://test-token.mdb-master-dev.k8s-core.ebs.crealogix.net/test-token");
//const environments = JSON.parse(open("../environments.json"));

export const options = {
	vus: 1,
	duration: "5s"
};

export default function() {	
	let token = tokenBuilder.getToken();
	let URL 	= "http://dbh-documents.mdb-master-lat.k8s-core.ebs.crealogix.net"+"/messaging/documents/12312/v1/documents";
	console.log("TOKEN: "+token)
	let res = http.get(URL, {
		headers: {"Authorization": "Bearer "+token,
				  "Accept": "application/hal+json",
				  "Content-Type": "application/json"},
	});
	let status = res.status;
	n++;
	console.log("Request number "+n+" is done with status "+status);
	//check part
	check(res, {
		"Status is 200": r => r.status === 200
	});
};