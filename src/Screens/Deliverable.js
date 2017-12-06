import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

class Deliverable extends Component {
  render(){
    return(
      <View>
        <View style={styles.headerContainer}>
           <Text style={styles.heading}>Deliverable</Text>
        </View>
        <View>
          <FormLabel containerStyle={styles.labelContainerStyle}>
            Name
          </FormLabel>
          <FormInput
            ref="form2"
            containerRef="containerRefYOYO"
            textInputRef="textInputRef"
            placeholder="Please enter your name..."
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Address
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            ref="form1"
            placeholder="Please enter your address..."
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Phone
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            placeholder="Please enter your phone number..."
          />
          <Button
            onPress={() => console.log('yo')}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SUBMIT"
          />
        </View>
      </View>

    )
  }

}



 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   headerContainer: {
     justifyContent: 'center',
     alignItems: 'center',
     padding: 40,
     backgroundColor:'#333',
   },
   heading: {
     color: 'white',
     marginTop: 10,
     fontSize: 22,
   },
   fonts: {
     marginBottom: 8,
   },
   user: {
     flexDirection: 'row',
     marginBottom: 6,
   },
   image: {
     width: 30,
     height: 30,
     marginRight: 10,
   },
   name: {
     fontSize: 16,
     marginTop: 5,
   },
   social: {
     flexDirection: 'row',
     justifyContent: 'center',
   },
   subtitleView: {
     flexDirection: 'row',
     paddingLeft: 10,
     paddingTop: 5,
   },
   ratingImage: {
     height: 19.21,
     width: 100,
   },
   ratingText: {
     paddingLeft: 10,
     color: 'grey',
   },
 });

 export default Deliverable
