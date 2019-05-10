import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";
import "../css/Overview.css"


const CountOverview = ({ cnt, dr_status }) => {
  let stat, cn;
  if(dr_status === -1){
    stat = '운행 중 ';
    cn = 'okay';
  }else if(dr_status === 0){
    stat = '정상 운행 종료';
    cn = 'okay';
  }else if(dr_status === 1){
    stat = '비상 1단계';
    cn = 'emerg';
  }else if(dr_status === 2){
    stat = '비상 2단계';
    cn = 'emerg';
  }
  return (
    <Card>
      <CardBody>
        <div className="overview">
          <div className="overview__content">
            <h2 className="text-primary">{cnt}<b>명</b></h2>
            <h3>현재 <span className={cn}>{stat}</span>입니다!</h3>
            <img
              src={require("./../../images/content/overview_img.svg")}
              alt="main desc"
            />
          </div>
        </div>
     </CardBody>
    </Card>
  );
};

export default CountOverview;
