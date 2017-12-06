import React, { Component } from "react";
import Expo from "expo";
// import HomeScreen from "./src/HomeScreen/index.js";
import { createRootNavigator } from "./src/router";
import { Root } from "native-base";

import { isSignedIn } from "./src/auth";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    isSignedIn()
      .then(res => this.setState({ isReady: true, signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return <Expo.AppLoading />;
    }

    const Layout = createRootNavigator(signedIn);
    return (
      <Root>
        <Layout />
      </Root>
    )
  }
}
