import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import UsersOverview from "./../components/blog/UsersOverview";
import TopReferrals from "./../components/common/TopReferrals";

const Statistics = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Statistics" subtitle="Busvisor" className="text-sm-left mb-3" />
    </Row>
    <Row>
      {/* Users Overview */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>
      {/* Top Referrals */}
      <Col lg="4" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>
    </Row>
  </Container>
);

export default Statistics