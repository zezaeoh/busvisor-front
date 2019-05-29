import React from "react";
import { Container, Button } from "shards-react";

const OpenedEmergency = ({ handleClick, cnt }) => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2><span className="text-primary">{cnt}</span>명</h2>
        <h3>현재 차내에<span className="text-danger"> 방치된 아이가</span> 존재합니다! </h3>
        <p>상황을 인지 하셨다면 아래 버튼을 클릭하세요.</p>
        <Button pill onClick={handleClick}>✓ 비상 종료</Button>
      </div>
    </div>
  </Container>
);

export default OpenedEmergency;

