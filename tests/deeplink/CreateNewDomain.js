import AuthTestToken from "../../libraries/AuthTestToken.js";
import { check, fail } from "k6";
import http from 'k6/http';
import { environment } from "../../environments/Environments.js";


const urlBase = JSON.parse(open("../../environments/" + environment)).baseBrokerageURL;
const tenantID = JSON.parse(open("../../environments/" + environment)).tenandID;
const tokenBuilder = new AuthTestToken();

const paymentBodyString = JSON.stringify(JSON.parse(open("createNewDomainBody.json")));


export const options = {
    vus: 10,
    duration: "30s"
//    iterations:20
};

export default function () {
    let tokens = tokenBuilder.getAllTokens();
    let URL = urlBase + "/deeplink/admin/" + tenantID + "/v1/domains/";

    const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const s = Array.from({length:6}, _ => c[Math.floor(Math.random()*c.length)]).join('');
    const domainPattern="allegro" + s + ".pl";
 //   console.log(domainPattern);
    

    let body = paymentBodyString.replace(/999999/g, domainPattern);


    /*   console.log(paymentDataCreator.getDebitAccList()[__VU - 1]);
    console.log(body);
    console.log(tokens[__VU - 1]);
    console.log(URL);*/
    let res = http.post(URL, body, {
        headers: {
            "Authorization": "Bearer " + tokens[__VU - 1],
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    check(res, {
        "Status is 200": r => r.status === 200
    });
//    console.log(res.status+"| "+__VU);

    for (var i = 0; i < tokens.length; i++) {
        tokenBuilder.removeToken(tokens[i])
    };
};