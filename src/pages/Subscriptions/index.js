import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

// import { Container } from './styles';

export default function Subscriptions() {
  return (
    <View>
      <Text>Subscriptions</Text>
    </View>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      type="FontAwesome"
      name="tag"
      style={{ fontSize: 20, color: tintColor }}
    />
  ),
};
