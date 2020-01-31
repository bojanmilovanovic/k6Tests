/*
 * 
 * Demonstration of a simple POST request
 * Additionally, demonstrated here is a Trend Metric for AVG duration
 * Trends are used for complex statistic checks (min, max, avg, %...)
 * Average duration is also checked with r.timings.duration * 
 * 
 */

import AuthTestToken from "../libraries/AuthTestToken.js";
import { check } from "k6";
import http from 'k6/http';
import { Trend, Rate, Counter, Gauge } from "k6/metrics";

var n = 0;
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
//	let conf    = environments[__VU - 0];
//	let token 	= conf.token;
//	let url 	= conf.url;
	let token = tokenBuilder.getToken();
	let URL 	= "http://dbh-assets.mdb-master-lat.k8s-core.ebs.crealogix.net"+"/assets/accounts/12312/v4/accounts/search";
	let body 	= '{"orderBy": [    {      "field": "AMOUNT",      "sortOrder": "DESC"    }]}';
	//run the request
	let res = http.post(URL, body, {
		headers: {"Authorization": "Bearer "+token,
			      "Accept": "application/hal+json",
			      "Content-Type": "application/json"},
	});
	let status = res.status;
	n++;
	console.log("Virtual user "+n+" sent a request with status "+status);
	TrendAVG.add(res.timings.duration);
	//check part
	check(res, {
		"Status is 200": r => r.status === 200,
		"AVG execution time is under 650ms": r => r.timings.duration < 650
//		"5 requests have been executed": r => r.iterations > 2.0
	});
};

