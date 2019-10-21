import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import { Container } from './styles';

import Button from '~/components/Button';
import Input from '~/components/Input';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Text>SignIn</Text>

        <Input icon="add" placeholder="insira um texto" />
        <Button>Criar conta</Button>
      </Container>
    </Background>
  );
}
