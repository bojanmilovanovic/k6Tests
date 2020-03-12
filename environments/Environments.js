let environment=null;

const env= `${__ENV.ENV}`;

switch (env){
    case "MASTERK8S" : environment="MDBMasterTestK8s.json"; break;
    case "SOBAK8S" : environment="SOBAR200TestK8s.json"; break;
//    case "MASTERWLS": environment=""; TBD?
}

export {environment};