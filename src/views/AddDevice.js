import React from "react";
import axios from 'axios';
import {
  Container,
  Row,
  Col,
} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import DeviceForm from "./../components/add-device/DeviceForm";

class AddDevice extends React.Component {
  state = {
    is_confirm: false,
    device_id: '',
    ec1_num: 3,
    ec2_num: 3,
    ec1: ['', '', ''],
    ec2: ['', '', ''],
  }

  handleDeviceIdChange = (e) => {
    this.setState({
      device_id: e.target.value
    });
  }

  handleChangeConfirmStatus = () => {
    if(window.confirm('사용가능한 기기입니다. 등록하시겠습니까?'))
      this.setState({
        is_confirm: true
      })
  }

  handleChangeEmergencyContact1 = (target_idx, e) => {
    this.setState({
      ec1: this.state.ec1.map((item, idx) =>{
        if(idx === target_idx)
          return e.target.value;
        return item;
      })
    });
  }

  handleChangeEmergencyContact2 = (target_idx, e) => {
    this.setState({
      ec1: this.state.ec2.map((item, idx) =>{
        if(idx === target_idx)
          return e.target.value;
        return item;
      })
    });
  }

  handleDeviceIdCheck = () => {
    const url = `http://52.231.67.172:8088/api/device/${this.state.device_id}`;

    axios.get(url)
      .then(res => {
        if(res.status === 200){
          this.handleChangeConfirmStatus()
        }
        else if(res.status === 403)
          alert('이미 사용중인 기기입니다!')
      })
      .catch(e => alert('존재하지 않는 기기 아이디 입니다!'))
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Add Device" subtitle="Busvisor" className="text-sm-left mb-3" />
        </Row>

        <Row>
          <Col>
            <DeviceForm 
              is_confirm={this.state.is_confirm}
              handleDeviceIdChange={this.handleDeviceIdChange}
              handleDeviceIdCheck={this.handleDeviceIdCheck}
              ec1_num={this.state.ec1_num}
              handleChangeEmergencyContact1={this.handleChangeEmergencyContact1}
              ec2_num={this.state.ec2_num}
              handleChangeEmergencyContact2={this.handleChangeEmergencyContact2}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddDevice;
