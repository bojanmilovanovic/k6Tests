import http from "k6/http";
import { sleep, check } from "k6";
import runTestOne from "/tests/brokerage/GetOrders.js";
import runTestTwo from "/tests/documents/(WIP)GetDocuments.js";

export default function() {
    runTestOne();
    runTestTwo();
};