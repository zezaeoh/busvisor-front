import React from "react";
import { Col, Card, CardBody, Button } from "shards-react";
import { Link } from "react-router-dom";

import "../css/Overview.css"

const NoDevice = () => (
  <Col>
    <Card>
      <CardBody>
        <div className="overview">
          <div className="overview__content">
            <img
              className="p-3"
              src={require("./../../images/content/no_content.svg")}
              alt="404 desc"
            />
            <h3>현재 등록된 기기가 없습니다!</h3>
            <p>아래 버튼을 눌러서 기기를 등록하세요:)</p>
            <Button pill tag={Link} to="/add-device">&larr; add device</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default NoDevice;

