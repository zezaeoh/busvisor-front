import React from "react";
import {
  Container,
  Card, 
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import { Redirect } from 'react-router';

import PageTitle from "./../components/common/PageTitle";
import {Dispatcher, Constants} from "./../flux"
import "../components/css/login.css";

class Login extends React.Component{
  state = {
    account: '',
    password: '',
  }

  handleLogin = () => {
    if(this.state.account === 'test' && this.state.password === '1234'){
      Dispatcher.dispatch({
        actionType: Constants.LOGIN
      });
    }else{
      alert('Wrong information!');
    }
  }

  handleKeyPress = (e) =>{
    if(e.key === 'Enter') {
      this.handleLogin();
    }
  }

  handleChangeAccount = (e) => {
    this.setState({
      account: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    if (this.props.login) {
      return (<Redirect to="/overview" />);
    }
  
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle title="Login" subtitle="Busvisor" className="text-sm-left mb-3" />
        </Row>
    
        <Row>
          <Col>
            <Card>
              <CardBody>
                <div className="login">
                  <div className="content">
                    <h2 className="text-primary">Login</h2>
                    
                    <Form>
                      <InputGroup seamless className="mb-3">
                        <InputGroupAddon type="prepend">
                          <InputGroupText>
                            <i className="material-icons">person</i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <FormInput 
                          placeholder="account" 
                          onChange={this.handleChangeAccount} 
                          onKeyPress={this.handleKeyPress}
                        />
                      </InputGroup>
                      
                      <InputGroup seamless className="mb-3 login_layout">
                        <FormInput
                          type="password"
                          placeholder="password"
                          onChange={this.handleChangePassword}
                          onKeyPress={this.handleKeyPress}
                        />
                        <InputGroupAddon type="append">
                          <InputGroupText>
                            <i className="material-icons">lock</i>
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Form>
                    <Button pill className="btn-block" onClick={this.handleLogin}>Login</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
