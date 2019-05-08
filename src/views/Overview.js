import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import CountOverview from "../components/overview/CountOverview"
import DrivingHistory from "./../components/overview/DrivingHistory";

const Overview = (props) => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="현재 승하차 인원" subtitle="Busvisor" className="text-sm-left mb-3" />
    </Row>

    <Row>
      <Col lg="8" md="12" sm="12" className="mb-4">
        <CountOverview />
      </Col>

      <Col  lg="4" md="12" sm="12" className="mb-4">
        <DrivingHistory />
      </Col>
    </Row>

    
  </Container>
);

export default Overview;
