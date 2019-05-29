import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

const getStatusDesc = (status_code) => {
  switch(status_code){
    case 0:
      return '정상 운행 종료'
    case 1:
      return '비상 상황 1'
    case 2:
      return '비상 상황 2'
    default:
      return '정상 운행 종료'
  }
}

const DrivingHistory = ({ title, dr_history }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {dr_history.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.dr_start_time.split('T')[0]}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {getStatusDesc(item.dr_type)}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        {/* Time Span */}
        <Col>
          <FormSelect
            size="sm"
            value="last-week"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option value="last-week">Last Week</option>
            <option value="today">Today</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </FormSelect>
        </Col>

        {/* View Full Report */}
        <Col className="text-right view-report">
          {/* eslint-disable-next-line */}
          <a href="#">Full report &rarr;</a>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

DrivingHistory.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  dr_history: PropTypes.array
};

DrivingHistory.defaultProps = {
  title: "최근 운행 기록",
  dr_history: [
    {
      dr_start_time: "2019.05.07T",
      dr_type: 0
    },
    {
      dr_start_time: "2019.05.06T",
      dr_type: 0
    },
    {
      dr_start_time: "2019.05.04T",
      dr_type: 0
    },
  ]
};

export default DrivingHistory;
