import AuthTestToken from "../../libraries/AuthTestToken.js";
import papaparse from "../../libraries/papaparse.js";
import { check, fail } from "k6";
import http from 'k6/http';

let urlBase = "http://dbh-documents.mdb-master-lat.k8s-core.ebs.crealogix.net";
const tokenBuilder = new AuthTestToken("http://test-token.mdb-master-dev.k8s-core.ebs.crealogix.net/test-token");

export const options = {
	vus: 3,
	duration: "6s"
};

export default function() {	
	let tokens = tokenBuilder.getAllTokens();	
	let URL 	= urlBase+"/messaging/documents/12312/v1/documents";
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