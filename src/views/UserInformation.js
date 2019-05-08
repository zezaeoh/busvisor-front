import React from "react";
import { Container, CardHeader, Button, Row, Col, Card, CardBody} from "shards-react";
import { Link } from "react-router-dom";

import PageTitle from "./../components/common/PageTitle";
import UserDetails from "./../components/user-profile-lite/UserDetails";
import "../components/css/UserInformation.css"

const UserInformation = (props) => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Information" subtitle="Busvisor" className="text-sm-left mb-3" />
    </Row>

    <Row>
      <Col lg="4">
        <UserDetails />
      </Col>
      <Col lg="8">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <div className="m-0 header_content">
              <div className="heavy">Active Device</div>
              <Button outline pill theme="secondary" tag={Link} to="/add-device">add device</Button>
            </div>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Divce Id
                  </th>
                  <th scope="col" className="border-0">
                    Registerd Time
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>BSD1622DS88Q</td>
                  <td>2019-03-22</td>
                  <td>online</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>HS234T75W223</td>
                  <td>2019-04-01</td>
                  <td>offline</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    
  </Container>
);

export default UserInformation;