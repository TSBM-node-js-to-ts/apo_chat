import {Given, Then, When} from "@cucumber/cucumber";
import request from "supertest";
import app from "../../src/app.js";

let response;
let name;

Given('사용자명이 {string}인 클라이언트가 존재한다', function (clientName) {
  name = clientName;
})

Given('사용자명이 null인 클라이언트가 존재한다', function () {
  name = null;
});

When('클라이언트가 채팅방 생성 엔드포인트에 POST 요청을 보낸다', async function() {
  response = await request(app)
  .post('/rooms')
  .send({ createdBy: name })
  .set('Accept', 'application/json')
})

Then('채팅방 생성이 완료된다', function() {
  if (response.statusCode !== 201) {
    throw new Error(`Expected status code 201, but got ${response.statusCode}`);
  }
  const id = response.body["id"];
  if (id === null) {
    throw new Error("id must be not null");
  }
})

Then('예외 응답이 발생한다', function() {
  if (response.statusCode !== 400) {
    throw new Error(`Expected status code 500, but got ${response.statusCode}`);
  }
})