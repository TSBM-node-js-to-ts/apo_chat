Feature: 채팅방 생성

  Scenario: 채팅방 생성이 정상적으로 동작한다
    Given 사용자명이 'tsbm'인 클라이언트가 존재한다
    When 클라이언트가 채팅방 생성 엔드포인트에 POST 요청을 보낸다
    Then 채팅방 생성이 완료된다

  Scenario: 사용자 이름이 존재하지 않는 경우 채팅방 생성이 동작하지 않는다
    Given 사용자명이 null인 클라이언트가 존재한다
    When 클라이언트가 채팅방 생성 엔드포인트에 POST 요청을 보낸다
    Then 예외 응답이 발생한다
