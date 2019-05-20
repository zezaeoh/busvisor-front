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
    handleDeviceForm,
    ec1_num,
    handleChangeEmergencyContact1,
    ec2_num,
    handleChangeEmergencyContact2
  }) => {
    let ec1 = [];
    let ec2 = [];
    
    for(let i=0; i<ec1_num; i++)
      ec1[i] = (<FormInput key={i} id={i} placeholder="010-0000-0000" />);
    
    for(let i=0; i<ec2_num; i++)
      ec2[i] = (<FormInput key={i} id={i} placeholder="010-0000-0000" />);

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
                      <label>1st Emergency Contact</label>
                      {ec1}
                    </FormGroup>

                    <FormGroup>
                      <label>2nd Emergency Contact</label>
                      {ec2}
                    </FormGroup>

                    <Button className="float-right" type="submit" onClick={handleDeviceForm}>Create New Device</Button>
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
