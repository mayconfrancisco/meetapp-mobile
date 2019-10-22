import React from 'react';
import Logo from '~/assets/logo.png';

import { Container, LogoImg } from './styles';

export default function Header() {
  return (
    <Container>
      <LogoImg source={Logo} />
    </Container>
  );
}
