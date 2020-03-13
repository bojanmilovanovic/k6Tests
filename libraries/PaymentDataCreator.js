import papaparse from "../libraries/papaparse.js";
import { environment } from "../environments/Environments.js";

const contractsFile = JSON.parse(open("../environments/" + environment)).contracts;
const csvData = papaparse.parse(open("../environments/" + contractsFile), { header: true });

export default class PaymentDataCreator {

    constructor() {

    }

    /*   constructor(paymentType){
          this.paymentType=paymentType;
       }
   
       getDebitAccInfoList(){
           let debitAccList = [];
           if (this.paymentType==="SEPA"){
               csvData.data.forEach(users => {
                   let debitAcc = users["DebitAccSEPA"];
                   debitAccList.push(this.getTokenForContract(debitAcc));
                   });
           }else if (this.paymentType==="SWIFT"){
               csvData.data.forEach(users => {
                   let debitAcc = users["DebitAccSWIFT"];
                   debitAccList.push(this.getTokenForContract(debitAcc));
                   });
           }
   
        return debitAccList;    
       }*/

    getDebitAccList() {
        let debitAccList = [];

        csvData.data.forEach(users => {
            let debitAcc = users["DebitAcc"];
            debitAccList.push(debitAcc);
        });


        return debitAccList;
    }


}