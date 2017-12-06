import React from 'react'
import { View } from 'react-native'
import { Header, List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },

]

const Deliverables = (props) => {
  return (
    <View>
      <Header
        // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Deliverables', style: { color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={i}
              title={l.name}
            />
          ))
        }
      </List>
    </View>
  )
}


export default Deliverables
