import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      type="FontAwesome"
      name="list-ul"
      style={{ fontSize: 20, color: tintColor }}
    />
  ),
};
