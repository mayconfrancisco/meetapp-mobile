import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';
import NavigationService from './services/navigation';

function registerService(ref) {
  NavigationService.setTopLevelNavigator(ref);
}

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes ref={registerService} />;
}
