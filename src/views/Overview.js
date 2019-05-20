import React from "react"
import axios from 'axios'
import { Container, Row, Col } from "shards-react"

import PageTitle from "./../components/common/PageTitle"
import CountOverview from "../components/overview/CountOverview"
import DrivingHistory from "./../components/overview/DrivingHistory"

class Overview extends React.Component {
  state = {
    dr_status: 0,
    dr_cnt: 0
  }
  
  getStatus = (url, cb) => {
    axios.get(url)
      .then(res => {
        cb(res.data);
      })
      .catch(e => console.log(e));
  }

  handleChangeState = (data) => {
    this.setState({
      dr_status: data.dr_type,
      dr_cnt: data.cnt
    })
  }

  componentDidMount() {
    const url = 'http://52.231.67.172:8088/api/device/sc13150/status';

    this.getStatus(url, this.handleChangeState);
    this.timer = setInterval(this.getStatus, 1000, url, this.handleChangeState);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="현재 승하차 인원" subtitle="Busvisor" className="text-sm-left mb-3" />
        </Row>

        <Row>
          <Col lg="8" md="12" sm="12" className="mb-4">
            <CountOverview cnt={this.state.dr_cnt} dr_status={this.state.dr_status}/>
          </Col>

          <Col  lg="4" md="12" sm="12" className="mb-4">
            <DrivingHistory />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Overview;
