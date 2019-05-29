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

  handleChangeEmergencyContact = (target_ec, target_idx, e) => {
    if(target_ec === 1)
      this.setState({
        ec1: this.state.ec1.map((item, idx) =>{
          if(idx === target_idx)
            return e.target.value;
          return item;
        })
      });
    else
      this.setState({
        ec2: this.state.ec2.map((item, idx) =>{
          if(idx === target_idx)
            return e.target.value;
          return item;
        })
      });
  }

  handleAddEmergencyContact = (target_ec) => {
    if(target_ec === 1)
      this.setState({
        ec1_num: this.state.ec1_num + 1,
        ec1: [...this.state.ec1, '']
      })
    else
      this.setState({
        ec2_num: this.state.ec2_num + 1,
        ec2: [...this.state.ec2, '']
      })
  }

  handleDeviceIdCheck = () => {
    const url = `http://52.231.67.172:8088/api/device/${this.state.device_id}`;

    axios.get(url)
      .then(res => {
        if(res.status === 200)
          this.handleChangeConfirmStatus()
        else
          alert('이미 등록된 기기입니다!')
      })
      .catch(e => {
        alert('존재하지 않는 기기 아이디 입니다!')
      })
  }

  handleSubmitDeviceData = () => {
    const url = 'http://52.231.67.172:8088/api/user/test/device';

    if(!this.state.is_confirm){
      alert('먼저 기기 인증을 하세요!');
      return;
    }

    axios.post(url, {
      device_id: this.state.device_id,
      ec1: this.state.ec1,
      ec2: this.state.ec2
    }).then(() => {
      alert('정상적으로 등록되었습니다.');
      this.props.history.push('/intro');
    }).catch(e => {
      console.log(e);
      alert('오류가 발생하였습니다.')
    })
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
              ec2_num={this.state.ec2_num}
              handleChangeEmergencyContact={this.handleChangeEmergencyContact}
              handleAddEmergencyContact={this.handleAddEmergencyContact}
              handleSubmitDeviceData={this.handleSubmitDeviceData}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddDevice;
