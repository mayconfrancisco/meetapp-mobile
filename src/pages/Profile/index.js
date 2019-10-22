import React, { useState, useRef, useEffect } from 'react';
import { Icon } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Header from '~/components/Header';

import { Container, Form, Separator } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const profile = useSelector(state => state.user.profile);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const refEmail = useRef();
  const refOldPassword = useRef();
  const refPassword = useRef();
  const refConfirmPassword = useRef();

  useEffect(() => {
    setPassword('');
    setConfirmPassword('');
    setOldPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      }),
    );
  }

  return (
    <Background>
      <Header />
      <Container>
        <Form>
          <Input
            placeholder="Nome completo"
            autoCapitalise="words"
            autoCorrect={false}
            value={name}
            onChangeText={setName}
            returnKeyType="next"
            onSubmitEditing={() => refEmail.current.focus()}
          />
          <Input
            placeholder="Seu e-mail"
            autoCapitalise="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            ref={refEmail}
            returnKeyType="next"
            onSubmitEditing={() => refOldPassword.current.focus()}
          />

          <Separator />

          <Input
            placeholder="Sua senha atual"
            secureTextEntry
            ref={refOldPassword}
            value={oldPassword}
            onChangeText={setOldPassword}
            returnKeyType="next"
            onSubmitEditing={() => refPassword.current.focus()}
          />
          <Input
            placeholder="Sua nova senha secreta"
            secureTextEntry
            ref={refPassword}
            value={password}
            onChangeText={setPassword}
            returnKeyType="next"
            onSubmitEditing={() => refConfirmPassword.current.focus()}
          />
          <Input
            placeholder="Confirmação de senha"
            secureTextEntry
            ref={refConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <Button onPress={handleSubmit} loading={loading}>
            Salvar perfil
          </Button>
        </Form>
        <Button onPress={() => dispatch(signOut())}>Sair do MeetApp</Button>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      type="FontAwesome"
      name="user"
      style={{ fontSize: 20, color: tintColor }}
    />
  ),
};
