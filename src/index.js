import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import CodePush from 'react-native-code-push';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './App';

function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#22202c" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
})(Index);

// CheckFrequency.ON_APP_RESUME - Sempre o app estiver em background/resume ele vai verificar se tem atualizacao e atualizara
// CheckFrequency.ON_APP_START - quando o app inicializa - eh um problema pq o usuario pode estar em alguma tela/contexto, ao atualizar volta tudo
// CheckFrequency.MANUAL - escolhemos quando acontece, podemos criar uma pagina que executa sempre antes de tudo para verificar se ha atualizacoes
// HA OUTRAS CONFIGURAÇOES - CONFIRA A DOC DO PROJETO
