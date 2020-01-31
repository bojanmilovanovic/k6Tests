import AuthTestToken from "../libraries/AuthTestToken.js";
import { check, fail } from "k6";
import http from 'k6/http';

const tokenBuilder = new AuthTestToken("http://test-token.mdb-master-dev.k8s-core.ebs.crealogix.net/test-token");

export const options = {
	vus: 1,
	duration: "5s"
};

export default function() {	
	let token = tokenBuilder.getToken();
	let URL 	= "http://dbh-documents.mdb-master-lat.k8s-core.ebs.crealogix.net"+"/messaging/documents/12312/v1/documents";
	let res = http.get(URL, {
		headers: {"Authorization": "Bearer "+token,
				  "Accept": "application/hal+json",
				  "Content-Type": "application/json"},
	});
	let status = res.status;
	check(res, {
		"Status is 200": r => r.status === 200
	});
};