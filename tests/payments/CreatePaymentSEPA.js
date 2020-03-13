import AuthTestToken from "../../libraries/AuthTestToken.js";
import { check, fail } from "k6";
import http from 'k6/http';
import { environment } from "../../environments/Environments.js";
import PaymentDataCreator from "../../libraries/PaymentDataCreator.js";
import { getPaymentExecDate } from "../../utils/dates.js";

const urlBase = JSON.parse(open("../../environments/" + environment)).basePaymentsURL;
const tenantID = JSON.parse(open("../../environments/" + environment)).tenandID;
const tokenBuilder = new AuthTestToken();

const paymentBodyString = JSON.stringify(JSON.parse(open("createSEPAPaymentBody.json")));
const paymentDataCreator = new PaymentDataCreator();

export const options = {
    vus: 5,
    duration: "30s"
};

export default function () {
    let tokens = tokenBuilder.getAllTokens();
    let URL = urlBase + "/payment/sepa/" + tenantID + "/v2/credittransfer";

    let body = paymentBodyString.replace(/CH9999999999/g, paymentDataCreator.getDebitAccList()[__VU - 1]).replace(/execdate/g, getPaymentExecDate());
 /*   console.log(paymentDataCreator.getDebitAccList()[__VU - 1]);
    console.log(body);
    console.log(tokens[__VU - 1]);
    console.log(URL);*/
    let res = http.post(URL, body, {
        headers: {
            "Authorization": "Bearer " + tokens[__VU - 1],
            "Accept": "application/json, application/hal+json",
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
 /*   let status = res.status;
    console.log(status);
    console.log(res.body);*/
    check(res, {
        "Status is 201": r => r.status === 201
    });
    for (var i = 0; i < tokens.length; i++) {
        tokenBuilder.removeToken(tokens[i])
    };
};