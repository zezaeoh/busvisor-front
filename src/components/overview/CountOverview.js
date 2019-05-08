import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";
import "../css/Overview.css"


const CountOverview = ({ cnt, cur_status }) => (
  <Card>
    <CardBody>
      <div className="overview">
        <div className="overview__content">
          <h2 className="text-primary">5<b>명</b></h2>
          <h3>현재는 <span>안전한 상태</span>입니다!</h3>
          <img
            src={require("./../../images/content/overview_img.svg")}
            alt="main desc"
          />
        </div>
      </div>
    </CardBody>
  </Card>
);

export default CountOverview;
