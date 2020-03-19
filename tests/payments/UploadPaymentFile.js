import AuthTestToken from "../../libraries/AuthTestToken.js";
import { check, fail, sleep } from "k6";
import http from 'k6/http';
import { group } from 'k6';
import { environment } from "../../environments/Environments.js";
import papaparse from "../../libraries/papaparse.js";
import encoding from "k6/encoding";

const urlBase = JSON.parse(open("../../environments/" + environment)).basePaymentsURL;
const tenantID = JSON.parse(open("../../environments/" + environment)).tenandID;
const tokenBuilder = new AuthTestToken();
const bcNo = JSON.parse(open("../../environments/" + environment)).bcNo;
const contractsFile = JSON.parse(open("../../environments/" + environment)).contracts;
const csvData = papaparse.parse(open("../../environments/" + contractsFile), { header: true });
const duration = 120; //time in seconds to wait to upload file
 
export const options = {
    vus: 1,
    iterations: 1
};


export default function () {

    group('Uploading a payment and waiting for it to be processed', function () {

        var contracts = [];
        csvData.data.forEach(users => {
            let contract = users["First"];
            contracts.push(contract);
        });

        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (day < 10)
            day = '0' + day;
        if (month < 10)
            month = '0' + month;
        var completeDate = year + '-' + month + '-' + day + 'T00:00:01';
        var msgidRandomPart = Math.random() * (999999999 - 100000000) + 100000000;
        var msgid = Math.trunc(year + month + day + msgidRandomPart);
        var msgidInc = msgid + '000000';
        let ibansForContracts = [];
        csvData.data.forEach(users => {
            let iban = users["IBAN"];
            ibansForContracts.push(iban);
        });
        var body = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAgQ1JFQUxPR0lYIEFHLCBtZnJpICYgbXBpbCBnZW5lcmljIHRlc3QgZmlsZSB0ZW1wbGF0ZSBmb3IgSVNPMjAwMjIgcGFpbi4wMDEgLS0+CjxEb2N1bWVudCB4bWxucz0iaHR0cDovL3d3dy5zaXgtaW50ZXJiYW5rLWNsZWFyaW5nLmNvbS9kZS9wYWluLjAwMS4wMDEuMDMuY2guMDIueHNkIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4c2k6c2NoZW1hTG9jYXRpb249Imh0dHA6Ly93d3cuc2l4LWludGVyYmFuay1jbGVhcmluZy5jb20vZGUvcGFpbi4wMDEuMDAxLjAzLmNoLjAyLnhzZCAgcGFpbi4wMDEuMDAxLjAzLmNoLjAyLnhzZCI+Cgk8Q3N0bXJDZHRUcmZJbml0bj4KPCEtLSAKCQlBIGxldmVsCi0tPgkJCgkJPEdycEhkcj4KCQkJPE1zZ0lkPjExMTExMTExMTwvTXNnSWQ+CgkJCTxDcmVEdFRtPjIyMjIyMjIyMjwvQ3JlRHRUbT4KCQkJPE5iT2ZUeHM+MTwvTmJPZlR4cz4KCQkJPEN0cmxTdW0+MC4wMTwvQ3RybFN1bT4KCQkJPEluaXRnUHR5PgoJCQkJPE5tPkZyZWRkeSBIaW56PC9ObT4KCQkJPC9Jbml0Z1B0eT4KCQk8L0dycEhkcj4KPCEtLSAJCgkJQiBsZXZlbAkJCi0tPgoJCTxQbXRJbmY+CgkJCTxQbXRJbmZJZD5DMTgxMzE0NS1CPC9QbXRJbmZJZD4KCQkJPFBtdE10ZD5UUkY8L1BtdE10ZD4KCQkJPEJ0Y2hCb29rZz50cnVlPC9CdGNoQm9va2c+CgkJCTxQbXRUcEluZj4KCQkJCTxTdmNMdmw+CgkJCQkJPENkPlNFUEE8L0NkPgoJCQkJPC9TdmNMdmw+CgkJCTwvUG10VHBJbmY+CgkJCTxSZXFkRXhjdG5EdD4zMzMzMzMzMzM8L1JlcWRFeGN0bkR0PgoJCQk8RGJ0cj4KCQkJCTxObT5GcmVkZHkgSGluejwvTm0+CgkJCTwvRGJ0cj4KCQkJPERidHJBY2N0PgoJCQkJPElkPgoJCQkJCTxJQkFOPjQ0NDQ0NDQ0NDwvSUJBTj4KCQkJCTwvSWQ+CgkJCTwvRGJ0ckFjY3Q+CgkJCTxEYnRyQWd0PgoJCQkJPEZpbkluc3RuSWQ+CgkJCQkJPENsclN5c01tYklkPgoJCQkJCQk8Q2xyU3lzSWQ+CgkJCQkJCQk8Q2Q+Q0hCQ0M8L0NkPgoJCQkJCQk8L0NsclN5c0lkPgoJCQkJCQk8TW1iSWQ+NTU1NTU1NTU1PC9NbWJJZD4KCQkJCQk8L0NsclN5c01tYklkPgoJCQkJPC9GaW5JbnN0bklkPgoJCQk8L0RidHJBZ3Q+CjwhLS0KCQlDIGxldmVsCQkJCi0tPgkJCgkJCTxDZHRUcmZUeEluZj4KCQkJCTxQbXRJZD4KCQkJCQk8SW5zdHJJZD5DMTgxMzE0NS1DPC9JbnN0cklkPgoJCQkJCTxFbmRUb0VuZElkPjY2NjY2NjY2NjwvRW5kVG9FbmRJZD4KCQkJCTwvUG10SWQ+CgkJCQk8QW10PgoJCQkJCTxJbnN0ZEFtdCBDY3k9IkVVUiI+MC4wMTwvSW5zdGRBbXQ+CgkJCQk8L0FtdD4KCQkJCTxDZHRyQWd0PgoJCQkJCTxGaW5JbnN0bklkPgoJCQkJCQk8QklDPkdSS0JDSDIyNzBBPC9CSUM+CgkJCQkJPC9GaW5JbnN0bklkPgoJCQkJPC9DZHRyQWd0PgoJCQkJPENkdHI+CgkJCQkJPE5tPlNFUEEgVEVTVENBU0U8L05tPgoJCQkJPC9DZHRyPgoJCQkJPENkdHJBY2N0PgoJCQkJCTxJZD4KCQkJCQkJPElCQU4+Q0gxNjAwNzc0MDEyMzEyMzQ1Njc4PC9JQkFOPgoJCQkJCTwvSWQ+CgkJCQk8L0NkdHJBY2N0PgoJCQkJPFJtdEluZj4KCQkJCQk8VXN0cmQ+U0VQQSBUZXN0PC9Vc3RyZD4KCQkJCTwvUm10SW5mPgoJCQk8L0NkdFRyZlR4SW5mPgoJCTwvUG10SW5mPgoJPC9Dc3RtckNkdFRyZkluaXRuPgo8L0RvY3VtZW50Pg==";
        // console.log("MsgID is: "+msgid);
        // console.log("MsgIDInc is: "+msgidInc);
        // console.log("BC NO is: "+bcNo);
        // console.log("Today's day is: "+completeDate);
        // console.log("IBANS: "+ibansForContracts);
        var bodyXML = encoding.b64decode(body);
        bodyXML = bodyXML.replace(/111111111/g, msgid);
        bodyXML = bodyXML.replace(/222222222/g, completeDate);
        bodyXML = bodyXML.replace(/333333333/g, year + '-' + month + '-' + day);
        bodyXML = bodyXML.replace(/444444444/g, ibansForContracts[__VU - 1]);
        bodyXML = bodyXML.replace(/555555555/g, bcNo);
        bodyXML = bodyXML.replace(/666666666/g, msgidInc);
        // console.log("XML: "+bodyXML);
        var body64 = '{ "xmlData": "' + encoding.b64encode(bodyXML) + '" }';
        // console.log("Body64: "+body64);

        let tokens = tokenBuilder.getAllTokens();
        let URL = urlBase + "/payments/pain/v1/credittransfer";
        let res = http.post(URL, body64, {
            headers: {
                "Authorization": "Bearer " + tokens[__VU - 1],
                "Accept": "application/json, application/hal+json",
                "Content-Type": "application/json; charset=UTF-8"
            },
        });
        console.log("TOKEN: "+tokens[__VU - 1]);
        console.log(res.body);
        // console.log(res.status);
        // console.log(ibansForContracts[__VU - 1]);
        check(res, {
            "Status is 201": r => r.status === 201
        });
        if (res.status != 201) {
            console.error("Check failed! Response status = " + response.status)
            console.error("Token:" + tokens[__VU - 1])
        }

        var stop = false;
        var counter = 0;
        console.log("URL FOR CHECKING IS: "+res._links.statusReport.href.text());
        while(stop==false){
            let resGet = http.get(res._links.statusReport.href.text(), {
                headers: {"Authorization": "Bearer "+tokens[__VU-1],
                          "Accept": "application/json, application/hal+json",
                          "Content-Type": "application/json; charset=UTF-8"},
            });
            if(resGet.state.text() == 'READY' || counter>duration){
                stop = true;
            }
            counter++;
            sleep(1);
        }






        for (var i = 0; i < tokens.length; i++) {
            tokenBuilder.removeToken(tokens[i])
        };
    });
};

// Add number of retries as the parameter and include this into some sort of a helpper function file
// function httpGet(url, params) {
//     var res; 
//     for (var retries = 3; retries > 0; retries--) {
//         res = http.get(url, params)
//         if (res.status != 408 && res.status < 500) {
//             return res;
//         }
//     }
//     return res;

// }