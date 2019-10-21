import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import { Container } from './styles';

import Button from '~/components/Button';
import Input from '~/components/Input';
import ButtonOpacity from '~/components/ButtonOpacity';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Text>SignIn</Text>

        <Input icon="add" placeholder="insira um texto" />
        <Button>Acessar</Button>
        <ButtonOpacity>Criar conta</ButtonOpacity>
      </Container>
    </Background>
  );
}
