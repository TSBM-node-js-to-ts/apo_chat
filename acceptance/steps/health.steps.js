import {When, Then} from "@cucumber/cucumber";
import request from "supertest";
import app from "../../src/app.js";

let response;

When('클라이언트가 헬스 체크 엔드포인트에 GET 요청을 보낸다', async function() {
    response = await request(app)
        .get('/health')
        .set('Accept', 'application/json')
});

Then('응답의 상태코드는 {int}이어야 한다', function (expectedStatusCode) {
    if (response.statusCode !== expectedStatusCode) {
        throw new Error(`Expected status code ${expectedStatusCode}, but got ${response.statusCode}`);
    }
});

Then('응답의 {string} 필드는 {string} 이어야 한다', function (field, expectedValue) {
    if (!Object.prototype.hasOwnProperty.call(response.body, field)) {
        throw new Error(`Expected field ${field} not found in response bod, got: ${JSON.stringify(response.body)}`);
    }
    const actual = String(response.body[field]);
    if (actual !== expectedValue) {
        throw new Error(`Expected field ${field} to have value ${expectedValue}, but got ${actual}`);
    }
});