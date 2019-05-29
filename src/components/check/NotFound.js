import React from "react";
import { Container, Button } from "shards-react";

const NotFound = ({ handleClick }) => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>잘못된 접근</h3>
        <p>누군가가 이미 비상상황을 처리하였습니다.</p>
        <Button pill onClick={handleClick}>✓ 확인</Button>
      </div>
    </div>
  </Container>
);

export default NotFound;

