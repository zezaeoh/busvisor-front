import React from "react";
import { Container, Button } from "shards-react";

const ClosedEmergency = ({ handleClick }) => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2 className="text-danger">상황 종료</h2>
        <h3>2차 알림 전송</h3>
        <p>이미 2차 알림이 전송되었습니다.</p>
        <Button pill onClick={handleClick}>✓ 확인</Button>
      </div>
    </div>
  </Container>
);

export default ClosedEmergency;

