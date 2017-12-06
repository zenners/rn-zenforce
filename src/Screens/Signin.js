import React, { Component } from 'react';

import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { onSignIn } from "../auth";

export default class LoginScreen extends Component {
  render() {
    const navigation = this.props.navigation
    return (
      <Container>
        <Header>
          <Text> Welcome to Zenforce </Text>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block light  onPress={() => {
              onSignIn().then(() => navigation.navigate("SignedIn"));
              }}
            >
              <Text>Sign In</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
