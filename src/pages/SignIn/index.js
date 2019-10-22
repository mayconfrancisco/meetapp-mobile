import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { singInRequest } from '~/store/modules/auth/actions';
import Logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { Container, Form } from './styles';

import Button from '~/components/Button';
import Input from '~/components/Input';
import ButtonOpacity from '~/components/ButtonOpacity';

export default function SignIn({ navigation }) {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  const refPassword = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const emailNewAccount = navigation.getParam('email');
    if (emailNewAccount) {
      setEmail(emailNewAccount);
      refPassword.current.focus();
    }
  }, [navigation]);

  function handleSubmit() {
    dispatch(singInRequest(email, password));
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

          <Button onPress={handleSubmit} loading={loading}>
            Entrar
          </Button>
        </Form>

        <ButtonOpacity onPress={() => navigation.navigate('SignUp')}>
          Criar conta grátis
        </ButtonOpacity>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
