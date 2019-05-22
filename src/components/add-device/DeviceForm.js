import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button
} from "shards-react";

const DeviceForm = ({ 
    is_confirm, 
    handleDeviceIdChange, 
    handleDeviceIdCheck, 
    ec1_num,
    ec2_num,
    handleChangeEmergencyContact,
    handleAddEmergencyContact,
    handleSubmitDeviceData
  }) => {
    let ec1 = [];
    let ec2 = [];
    
    for(let i=0; i<ec1_num; i++)
      ec1[i] = (<FormInput key={i} id={i} onChange={e => handleChangeEmergencyContact(1, i, e)} placeholder="010-0000-0000" />);
    
    for(let i=0; i<ec2_num; i++)
      ec2[i] = (<FormInput key={i} id={i} onChange={e => handleChangeEmergencyContact(2, i, e)} placeholder="010-0000-0000" />);

    return (
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
                          onChange={handleDeviceIdChange}
                          style={{flex: 1}}
                          disabled={(is_confirm)? 'disabled' : ''}
                        />
                        <Button 
                          className="ml-1" 
                          onClick={handleDeviceIdCheck}
                          disabled={is_confirm}
                        >check</Button>
                      </Row>
                    </FormGroup>

                    <FormGroup>
                      <Row className="m-0">
                        <Col className="p-0"><label>1st Emergency Contact</label></Col>
                        <div className="text-primary" onClick={() => handleAddEmergencyContact(1)}><i className="material-icons">control_point</i></div>
                      </Row>
                      {ec1}
                    </FormGroup>

                    <FormGroup>
                      <Row className="m-0">
                        <Col className="p-0"><label>2nd Emergency Contact</label></Col>
                        <div className="text-primary" onClick={() => handleAddEmergencyContact(2)}><i className="material-icons">control_point</i></div>
                      </Row>
                      {ec2}
                    </FormGroup>

                    <Button className="float-right" onClick={handleSubmitDeviceData}>Create New Device</Button>
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
}

export default DeviceForm;
