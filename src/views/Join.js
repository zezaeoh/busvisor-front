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
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

import PageTitle from "./../components/common/PageTitle";

const Join = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Join Us" subtitle="Busvisor" className="text-sm-left mb-3" />
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
                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feEmailAddress">Email</label>
                          <FormInput
                            id="feEmailAddress"
                            type="email"
                            placeholder="Email"
                          />
                        </Col>
                        <Col md="6">
                          <label htmlFor="fePassword">Password</label>
                          <FormInput
                            id="fePassword"
                            type="password"
                            placeholder="Password"
                          />
                        </Col>
                      </Row>

                      <FormGroup>
                        <label htmlFor="feInputAddress">Address</label>
                        <FormInput id="feInputAddress" placeholder="1234 Main St" />
                      </FormGroup>

                      <FormGroup>
                        <label htmlFor="feInputAddress2">Address 2</label>
                        <FormInput
                          id="feInputAddress2"
                          placeholder="Apartment, Studio or Floor"
                        />
                      </FormGroup>

                      <Row form>
                        <Col md="6" className="form-group">
                          <label htmlFor="feInputCity">City</label>
                          <FormInput id="feInputCity" />
                        </Col>
                        <Col md="4" className="form-group">
                          <label htmlFor="feInputState">State</label>
                          <FormSelect id="feInputState">
                            <option>Choose...</option>
                            <option>...</option>
                          </FormSelect>
                        </Col>
                        <Col md="2" className="form-group">
                          <label htmlFor="feInputZip">Zip</label>
                          <FormInput id="feInputZip" />
                        </Col>
                        <Col md="12" className="form-group">
                          <FormCheckbox>
                            {/* eslint-disable-next-line */}I agree with your{" "}
                            <a href="#">Privacy Policy</a>.
                          </FormCheckbox>
                        </Col>
                      </Row>
                      <Button className="float-right" type="submit">Create New Account</Button>
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

export default Join;