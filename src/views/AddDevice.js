import React from "react";
import {
  Container,
  Card, 
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";

import PageTitle from "./../components/common/PageTitle";

const AddDevice = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Add Device" subtitle="Busvisor" className="text-sm-left mb-3" />
    </Row>

    <Row>
      <Col>
        <Card>
          <CardHeader className="border-bottom">
            <h6 className="m-0">Fill The Blank</h6>
          </CardHeader>
          <CardBody>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <FormGroup>
                        <label htmlFor="feDeviceId">Device Id</label>
                        <Row className="m-0">
                          <FormInput
                            id="feDeviceId"
                            placeholder="Device Id"
                            style={{flex: 1}}
                          />
                          <Button className="ml-1">check</Button>
                        </Row>
                      </FormGroup>

                      <FormGroup>
                        <label htmlFor="feEc1-1">1st Emergency Contact</label>
                        <FormInput id="feEc1-1" placeholder="010-0000-0000" />
                        <FormInput id="feEc1-2" placeholder="010-0000-0000" />
                        <FormInput id="feEc1-3" placeholder="010-0000-0000" />
                      </FormGroup>

                      <FormGroup>
                        <label htmlFor="feEc2-1">2nd Emergency Contact</label>
                        <FormInput id="feEc2-1" placeholder="010-0000-0000" />
                        <FormInput id="feEc2-2" placeholder="010-0000-0000" />
                        <FormInput id="feEc2-3" placeholder="010-0000-0000" />
                      </FormGroup>

                      <Button className="float-right" type="submit">Create New Device</Button>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AddDevice;