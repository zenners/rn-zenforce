import React from "react";

import { Platform, StatusBar } from "react-native";

import { StackNavigator, TabNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignIn from "./Screens/Signin";
import Deliverable from "./Screens/Deliverable";

import Deliverables from "./Screens/Deliverables";
import TaskDetail from "./Screens/TaskDetail";

import Notifications from "./Screens/Notifications";
import Profile from "./Screens/Profile";

import Tasks from "./TaskScreen";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({

  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const TasksNavigator = StackNavigator({

  Calendar: {
    screen: Tasks,
    navigationOptions: {
      title: "Tasks"
    }
  },
  Detail: {
    screen: TaskDetail,
    navigationOptions: {
      title: "ViewTask"
    }
  },
  Deliverable: {
    screen: Deliverable,
    navigationOptions: {
      title: "Deliverable"
    }
  },
  // Expenses: {
  //   screen: TaskDetail,
  //   navigationOptions: {
  //     title: "ViewTask"
  //   }
  // },
  // Attachments: {
  //   screen: TaskDetail,
  //   navigationOptions: {
  //     title: "ViewTask"
  //   }
  // }
});



export const SignedIn = TabNavigator({
  Home: {
    screen: TasksNavigator,
    navigationOptions: {
      tabBarLabel: "Tasks",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={15} color={tintColor} />
      )
    }
  },
  Deliverables: {
    screen: Deliverables,
    navigationOptions: {
      tabBarLabel: "Deliverables",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={15} color={tintColor} />
      )
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: "Notifications",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={15} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={15} color={tintColor} />
      )
    }
  }
}, {tabBarPosition: 'bottom',});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
