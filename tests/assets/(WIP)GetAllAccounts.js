import AuthTestToken from "../../libraries/AuthTestToken.js";
import { check } from "k6";
import http from 'k6/http';
import { Trend, Rate, Counter, Gauge } from "k6/metrics";

let urlBase = "http://dbh-assets.mdb-master-lat.k8s-core.ebs.crealogix.net";
const tokenBuilder = new AuthTestToken();

export let TrendAVG = new Trend("AVG");

export const options = {
		stages: [
	    { duration: "3s", target: 3 },
	    { duration: "5s", target: 6 },
	    { duration: "3s", target: 3 }
	  ]
};

export default function() {	
	let tokens = tokenBuilder.getAllTokens();
	let URL 	= urlBase+"/assets/accounts/12312/v4/accounts/search";
	let body 	= '{"orderBy": [    {      "field": "AMOUNT",      "sortOrder": "DESC"    }]}';
	let res = http.post(URL, body, {
		headers: {"Authorization": "Bearer "+tokens[__VU],
			      "Accept": "application/hal+json",
			      "Content-Type": "application/json"},
	});
	let status = res.status;
	check(res, {
		"Status is 200": r => r.status === 200,
		"AVG execution time is under 650ms": r => r.timings.duration < 650
	});
};

