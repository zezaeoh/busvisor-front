import React from "react";
import queryString from 'query-string';
import axios from 'axios';

import NotFound from './../components/check/NotFound';
import OpenedEmergency from './../components/check/OpenedEmergency';
import ClosedEmergency from './../components/check/ClosedEmergency';

class Check extends React.Component {
  state = {
    status: 0,
    cnt: 0,
    params: queryString.parse(this.props.location.search) 
  }

  handleChangeStatus = (status, cnt) => {
    this.setState({
      status: status,
      cnt: (cnt) ? cnt: 0
    })
  }

  handleClick = () => {
    const url = `http://52.231.67.172:8088/api/detector/${this.state.params.token}`;

    if(this.state.status === 0)
      this.props.history.push('/intro');
    else{
      axios.delete(url)
        .then(res => {
          if(this.state.status === 1){
            if(res.status === 200)
              alert('비상상황이 정상적으로 종료되었습니다!');
            else
              alert('이미 2차 비상 연락망에 알림이 전송되었습니다!');
          }
          this.props.history.push('/intro');
        })
        .catch(e => {
          alert('알수없는 오류가 발생하였습니다!');
          this.props.history.push('/intro');
        })
    }
  }

  componentWillMount() {
    const url = `http://52.231.67.172:8088/api/detector/${this.state.params.token}`;

    axios.get(url)
      .then(res => {
        console.log(res);
        if(res.status === 203)
          this.handleChangeStatus(2);
        else
          this.handleChangeStatus(1, res.data.cnt);
      })
      .catch(e => console.log(e))
  }

  render() {
    switch(this.state.status){
      case 0: // 404
        return (<NotFound handleClick={this.handleClick}/>);
      case 1: // opened emerg
        return (<OpenedEmergency handleClick={this.handleClick} cnt={this.state.cnt}/>);
      case 2: // closed emerg
        return (<ClosedEmergency handleClick={this.handleClick}/>);
      default:
        return (<NotFound handleClick={this.handleClick} />)
    }
  }
}

export default Check;
