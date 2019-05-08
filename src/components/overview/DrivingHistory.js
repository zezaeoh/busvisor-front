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

const DrivingHistory = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
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
  referralData: PropTypes.array
};

DrivingHistory.defaultProps = {
  title: "최근 운행 기록",
  referralData: [
    {
      title: "2019.05.07",
      value: "정상 운행 종료"
    },
    {
      title: "2019.05.06",
      value: "정상 운행 종료"
    },
    {
      title: "2019.05.05",
      value: "정상 운행 종료"
    },
    {
      title: "2019.05.04",
      value: "정상 운행 종료"
    },
    {
      title: "2019.05.03",
      value: "정상 운행 종료"
    },
    {
      title: "2019.05.02",
      value: "정상 운행 종료"
    },
    {
      title: "2019.05.01",
      value: "정상 운행 종료"
    },
    {
      title: "2019.04.30",
      value: "정상 운행 종료"
    }
  ]
};

export default DrivingHistory;
