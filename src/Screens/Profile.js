import React from "react";
import { View } from "react-native";
import { Container,Header, Content, Card, Button, Text } from "native-base";
import { onSignOut } from "../auth";

export default ({ navigation }) => (
   <Container>
    <Content>
      <Header />
      <Button block light onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}>
          <Text>Sign Out</Text>
        </Button>

    </Content>




 </Container>
);
