import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import Input from '~/components/Input';
import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Text>SignIn</Text>

        <Input icon="add" placeholder="insira um texto" />
      </Container>
    </Background>
  );
}
