import AuthTestToken from "../../libraries/AuthTestToken.js";
import { check, fail } from "k6";
import http from 'k6/http';
import { environment } from "../../environments/Environments.js";
import moment from "../../libraries/moment.js";
import { sleep } from "k6";


const urlBase = JSON.parse(open("../../environments/" + environment)).baseBrokerageURL;
const tenantID = JSON.parse(open("../../environments/" + environment)).tenandID;
const tokenBuilder = new AuthTestToken();

const createDomainBodyString = JSON.stringify(JSON.parse(open("createNewDomainBody.json")));
const registerLinkBodyString = JSON.stringify(JSON.parse(open("registerNewLinkBody.json")));
const addParametersBodyString = JSON.stringify(JSON.parse(open("addParametersToDomain.json")));

var domainID=null;


export const options = {
    vus: 20,
    duration: "30s",
    setupTimeout: "30s",
    teardownTimeout: "30s"
};

export function setup(){
    let tokens = tokenBuilder.getAllTokens();
    let urlDomainCreate = urlBase + "/deeplink/admin/" + tenantID + "/v1/domains/";
    
/*    const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const s = Array.from({length:6}, _ => c[Math.floor(Math.random()*c.length)]).join('');
    const domainPattern = "allegro" + s + ".pl";*/
    const domainPattern = "allegro.pl";
    

    let bodyDomain = createDomainBodyString.replace(/999999/g, domainPattern);


    let res = http.post(urlDomainCreate, bodyDomain, {
        headers: {
            "Authorization": "Bearer " + tokens[0],
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    
    var jasonBody=JSON.parse(res.body);
    domainID=jasonBody.id;
    check(res, {
        "Status is 200": r => r.status === 200
    });
       
    let urlAddParameters = urlBase + "/deeplink/admin/" + tenantID + "/v1/domains/" +domainID+ "/parameters";
    

    let res1 = http.put(urlAddParameters, addParametersBodyString, {
        headers: {
            "Authorization": "Bearer " + tokens[0],
            "Content-Type": "application/json"
        },
    });
    check(res1, {
        "Status is 200": r => r.status === 200
    });
    
    sleep(10);

    return {"id": domainID}
}

export default function () {

    let tokens = tokenBuilder.getAllTokens();
    var linkName= "allegro.pl "+ Date.now();
//    var moment = require('moment');
    var nowDate = moment().add(0, 'hour').add(15, 'second').utc().format();
    var futureDate = moment().add(20, 'day').add(2, 'minute').utc().format();


    let urlRegisterLink = urlBase + "/deeplink/registration/" + tenantID + "/v1/link";

    let bodyLink = registerLinkBodyString.replace(/link999/g, linkName).replace(/nowDate/g, nowDate).replace(/futureDate/g, futureDate);
    

    let res2 = http.post(urlRegisterLink, bodyLink, {
        headers: {
            "Authorization": "Bearer " + tokens[0],
            "Content-Type": "application/json"
        },
    });
    
    if (res2.status!=201){
        console.log(res2.status);
        console.log(res2.body);
    }
    check(res2, {
        "Status is 200": r => r.status === 201
    });

}

    
export function teardown(data){
    let tokens = tokenBuilder.getAllTokens();
       
    let urlDomainUpdate = urlBase + "/deeplink/admin/" + tenantID + "/v1/domains/"+data.id;
    

    let domainPatternUpdate = "allegro"+Date.now()+".pl";

    let bodyDomainUpdate = createDomainBodyString.replace(/999999/g, domainPatternUpdate)

    let res3 = http.put(urlDomainUpdate, bodyDomainUpdate, {
        headers: {
            "Authorization": "Bearer " + tokens[0],
            "Content-Type": "application/json"
        },
    });
    check(res3, {
        "Status is 200": r => r.status === 200
    });
       
    for (var i = 0; i < tokens.length; i++) {
        tokenBuilder.removeToken(tokens[i])
    };


};
