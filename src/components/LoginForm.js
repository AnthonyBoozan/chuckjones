import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '',
    password: ''
  };

  render() {
    return (
      <Card>
        <CardSection />
          <Input
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
            label="Email"
            placeholder="chuckjones@gmail.com"
          />
        <CardSection />

        <CardSection />
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            placeholder="password"
            secure
          />
        <CardSection />

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
