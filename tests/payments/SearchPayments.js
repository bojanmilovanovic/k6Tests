import AuthTestToken from "../../libraries/AuthTestToken.js";
import { check, fail } from "k6";
import http from 'k6/http';
import {environment} from "../../environments/Environments.js";

const urlBase  	  = JSON.parse(open("../../environments/"+environment)).basePaymentsURL;
const tenantID    = JSON.parse(open("../../environments/"+environment)).tenandID;
const tokenBuilder = new AuthTestToken();
var bodyJSON    = JSON.parse(open("SearchPaymentsBody.json"));

export const options = {
	vus: 5,
	duration: "20s"
};

export default function() {	
	let tokens  = tokenBuilder.getAllTokens();	
    let URL 	= urlBase+"/payment/payments/"+tenantID+"/v2/payment/search";
    let body    = JSON.stringify(bodyJSON);
	let res     = http.post(URL, body, {
		                headers: {"Authorization": "Bearer "+tokens[__VU],
				        "Accept": "application/json, application/hal+json",
				        "Content-Type": "application/json; charset=UTF-8"},
    });
	check(res, {
		"Status is 200": r => r.status === 200
    });
    if (res.status != 200) {
        console.error("Check failed, contract=" + ", response status=" + response.status)
        console.error("Token:" + tokens[__VU])
      }
	for (var i = 0; i < tokens.length; i++) {
		tokenBuilder.removeToken(tokens[i])
	};	
};