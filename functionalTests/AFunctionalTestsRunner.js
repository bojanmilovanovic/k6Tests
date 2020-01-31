import TestTokenClient from "../libs/test-token-client.js";
import CountryTest from "./referencedata-test-functional-module-country.js";
import CurrencyTest from "./referencedata-test-functional-module-currency.js";
import OrganisationUnitTest from "./referencedata-test-functional-module-organisation-unit.js";

import { group } from "k6";

const testTokenClient = ""; //Generate a token for contract

export function setup() {
  let testToken = testTokenClient.acquire();
  let testTokenWithoutScope = testTokenClient.acquireWithoutScope();
  return {
    token: testToken,
    tokenWithoutScope: testTokenWithoutScope
  };
}

export default function(data) {
  group("endtoend.country", function() {
    CountryTest(data);
  });
  group("endtoend.currency", function() {
    CurrencyTest(data);
  });
  group("endtoend.organisation-unit", function() {
    OrganisationUnitTest(data);
  });
}

export function teardown(data) {
  testTokenClient.invalidate(data.token);
  testTokenClient.invalidate(data.tokenWithoutScope);
}