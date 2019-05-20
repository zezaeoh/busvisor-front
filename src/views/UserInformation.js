import React from "react"
import axios from 'axios'
import { Container,Row, Col } from "shards-react"

import PageTitle from "./../components/common/PageTitle"
import UserDetails from "./../components/user-information/UserDetails"
import ActiveDevice from "./../components/user-information/ActiveDevice"
import "../components/css/UserInformation.css"

class UserInformation extends React.Component {
  state = {
    userDetails: {
      name: "member",
      avatar: require("./../images/avatars/user.png"),
      id: "id",
      performanceReportTitle: "Workload",
      performanceReportValue: 0,
      metaTitle: "Description",
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    },
    devices: []
  }

  handleUpdateUserDetails = (user) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        name: user.name,
        id: user.id
      }
    });
  }

  handleUpdateDevices = (devices) => {
    this.setState({
      devices: devices
    });
  }

  componentDidMount() {
    const url = 'http://52.231.67.172:8088/api/user/test';

    axios.get(url)
      .then(res => {
        this.handleUpdateUserDetails(res.data);
        this.handleUpdateDevices(res.data.devices);
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="User Information" subtitle="Busvisor" className="text-sm-left mb-3" />
        </Row>

        <Row>
          <Col lg="4">
            <UserDetails userDetails={this.state.userDetails}/>
          </Col>
          <Col lg="8">
            <ActiveDevice devices={this.state.devices}/>
          </Col>
        </Row>
    
      </Container>
    );
  }
}

export default UserInformation;
