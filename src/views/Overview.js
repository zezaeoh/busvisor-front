import React from "react"
import axios from 'axios'
import { Container, Row, Col } from "shards-react"

import PageTitle from "./../components/common/PageTitle"
import CountOverview from "../components/overview/CountOverview"
import DrivingHistory from "./../components/overview/DrivingHistory"
import NoDevice from "./../components/overview/NoDevice"

class Overview extends React.Component {
  state = {
    device_id: '',
    devices: [],
    is_driving: false,
    dr_status: 0,
    dr_cnt: 0,
    dr_history: []
  }
  
  getStatus = () => {
    const url = `http://13.76.199.186:8088/api/device/${this.state.device_id}/status`;

    axios.get(url)
      .then(res => {
        this.setState({
          is_driving: res.data.is_driving,
          dr_status: res.data.dr_type,
          dr_cnt: res.data.cnt
        })
      })
      .catch(e => console.log(e));
  }

  getHistory = () => {
    const url = `http://13.76.199.186:8088/api/device/${this.state.device_id}/history`;

    axios.get(url)
      .then(res => {
        this.setState({
          dr_history: res.data
        })
      })
      .catch(e => console.log(e));
  }

  handleChangeState = (data) => {
    this.setState({
      is_driving: data.is_driving,
      dr_status: data.dr_type,
      dr_cnt: data.cnt
    })
  }

  handleChangeOption = (e) => {
    this.setState({device_id: e.target.value})
  }

  async componentWillMount() {
    let url = 'http://13.76.199.186:8088/api/user/test';
    let res = await axios.get(url);

    if(!res.data.devices.length){
      return;
    }

    await this.setState({
      device_id: res.data.devices[0].id,
      devices: res.data.devices.map(i => i.id)
    });
    
    this.timer1 = setInterval(this.getStatus, 1000);
    this.timer2 = setInterval(this.getHistory, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }

  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="현재 승하차 인원" subtitle="Busvisor" className="text-sm-left mb-3" />
        </Row>

        {
        (this.state.device_id)?
        (<Row>
          <Col lg="8" md="12" sm="12" className="mb-4">
            <CountOverview 
              handleChange={this.handleChangeOption}
              cnt={this.state.dr_cnt} 
              dr_status={this.state.dr_status} 
              is_driving={this.state.is_driving} 
              devices={this.state.devices}
              device_id={this.state.device_id}
          />
          </Col>

          <Col  lg="4" md="12" sm="12" className="mb-4">
            <DrivingHistory dr_history={this.state.dr_history}/>
          </Col>
        </Row>):
        (<Row>
          <NoDevice />
        </Row>)
        }
      </Container>
    );
  }
}

export default Overview;
