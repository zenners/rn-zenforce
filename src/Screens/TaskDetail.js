import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Button as RNEButton, Card } from 'react-native-elements'
import { Container, Form, Item, Label, Body, List, Separator, Left, Icon, ListItem, CheckBox, Content, Button as NBButton, ActionSheet, Text } from "native-base";

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var listItemStyle = {marginLeft: 0, paddingLeft: 17}

class Details extends Component  {
  state = {
    clicked: 0
  }
  static navigationOptions = ({ navigation }) => {
    var that = this
    const { params = {} } = navigation.state;
    let headerRight = (
      <NBButton
        title="test"
        onPress={() => ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
      >
        <Text>Actionsheet</Text>
      </NBButton>

    );
    return { headerRight };
  };



  render(){
    const navigation = this.props.navigation
    return (
      <View>
        <View style={styles.headerContainer}>
           <Text style={styles.heading}>Task Title</Text>
           <Text style={styles.heading}>Description of the task</Text>
        </View>

          <Text> Subtasks </Text>
          <List style={{ backgroundColor: '#fff' }}>


            <ListItem style={listItemStyle} >
              <CheckBox checked={false} />
              <Body>
                <Text>Daily Stand Up</Text>
              </Body>
            </ListItem >
            <ListItem style={listItemStyle}>
              <CheckBox checked={false} />
              <Body>
                <Text>Daily Stand Up</Text>
              </Body>
            </ListItem>

          </List>
          <Text> Notes </Text>
          <Form>
            <Item stackedLabel>
              <Label>Notes</Label>
              <Input />
            </Item>

          </Form>


      </View>
    )
  }
}


const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor:'#333',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 18,
  },
  description: {
    color: 'white',
    marginTop: 10,
    fontSize: 14,
  },
})

export default Details
