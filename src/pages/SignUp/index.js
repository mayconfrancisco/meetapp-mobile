import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { addAccountRequest } from '~/store/modules/user/actions';
import Logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { Container, Form } from './styles';

import Button from '~/components/Button';
import Input from '~/components/Input';
import ButtonOpacity from '~/components/ButtonOpacity';

export default function SignUp({ navigation }) {
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();
  const refEmail = useRef();
  const refPassword = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(addAccountRequest({ name, email, password }));
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} alt="Logo MeetApp" />

        <Form>
          <Input
            placeholder="Nome completo"
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => refEmail.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <Input
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            ref={refEmail}
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

          <Button onPress={handleSubmit} loading={loading}>
            Criar conta
          </Button>
        </Form>

        <ButtonOpacity onPress={() => navigation.navigate('SignIn')}>
          Já tenho login
        </ButtonOpacity>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
