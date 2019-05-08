import React from "react";
import { Container, Row, Col, Card, CardBody} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import "../components/css/Intro.css"

const Intro = (props) => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Introduce" subtitle="Busvisor" className="text-sm-left mb-3" />
    </Row>

    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="intro">
              <div className="intro__content">
                <h2 className="text-primary">WELCOME</h2>
                <h3>This is Busvisor!</h3>
                <p>This is the main description page.</p>
                <img 
                  src={require("./../images/content/main_content_02.svg")}
                  alt="main desc"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    
  </Container>
);

export default Intro;
