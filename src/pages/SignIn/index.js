import React, { useRef, useState } from 'react';
import { Image } from 'react-native';

import Logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { Container, Form } from './styles';

import Button from '~/components/Button';
import Input from '~/components/Input';
import ButtonOpacity from '~/components/ButtonOpacity';

export default function SignIn() {
  const refPassword = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.tron.log('SUBMIT', email, password);
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} alt="Logo MeetApp" />

        <Form>
          <Input
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => refPassword.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder="Sua senha secreta"
            secureTextEntry
            ref={refPassword}
            value={password}
            onChangeText={setPassword}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <Button onPress={handleSubmit}>Entrar</Button>
        </Form>

        <ButtonOpacity>Criar conta grátis</ButtonOpacity>
      </Container>
    </Background>
  );
}
