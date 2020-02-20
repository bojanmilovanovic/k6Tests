import http from "k6/http";
import { sleep, check } from "k6";
import runTestOne from "/tests/brokerage/GetOrders.js";
import { options as runTestOneOptions } from "/tests/brokerage/GetOrders.js";
import runTestTwo from "/tests/documents/(WIP)GetDocuments.js";

let optionsSum = {};
Object.entries(runTestOneOptions.stages).forEach(item => optionsSum[item[0]] = item[1]);

export const options = {
		 stage: optionsSum
};

export default function() {
//	console.log(JSON.stringify(optionsSum));
    runTestOne();
//    runTestTwo();
};