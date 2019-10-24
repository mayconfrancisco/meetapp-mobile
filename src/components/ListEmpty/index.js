import React from 'react';
import { Icon } from 'native-base';

import { Container, Text } from './styles';

export default function ListEmpty() {
  return (
    <Container>
      <Icon
        type="MaterialIcons"
        name="search"
        style={{ fontSize: 40, color: 'rgba(255,255,255,0.6)' }}
      />
      <Text>Não encontramos dados</Text>
    </Container>
  );
}
