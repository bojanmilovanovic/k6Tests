import AuthTestToken from "../libraries/AuthTestToken.js";
import { check } from "k6";
import http from 'k6/http';
import { Trend, Rate, Counter, Gauge } from "k6/metrics";

const tokenBuilder = new AuthTestToken("http://test-token.mdb-master-dev.k8s-core.ebs.crealogix.net/test-token");

export let TrendAVG = new Trend("AVG");

export const options = {
	vus: 1,
	duration: "5s",
	thresholds: {
    "AVG": [
      "avg<800"
	  ]
	},
	insecureSkipTLSVerify: true
};

export default function() {	
	let token = tokenBuilder.getToken();
	let URL 	= "http://dbh-assets.mdb-master-lat.k8s-core.ebs.crealogix.net"+"/assets/accounts/12312/v4/accounts/search";
	let body 	= '{"orderBy": [    {      "field": "AMOUNT",      "sortOrder": "DESC"    }]}';
	let res = http.post(URL, body, {
		headers: {"Authorization": "Bearer "+token,
			      "Accept": "application/hal+json",
			      "Content-Type": "application/json"},
	});
	let status = res.status;
	TrendAVG.add(res.timings.duration);
	check(res, {
		"Status is 200": r => r.status === 200,
		"AVG execution time is under 650ms": r => r.timings.duration < 650
	});
};

