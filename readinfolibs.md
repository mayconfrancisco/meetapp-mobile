npx react-native init meetappmobile

editorconfig

deletar o .eslintrc.js
yarn add eslint -D
yarn eslint --init
deletar package-lock.json
yarn

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint <br />
configurar o arquivo .eslintrc.js: <br />
  add no extends 'prettier', 'prettier/react'
  add parser:'babel-eslint'
  add 'prettier' nos plugins
  add rules abaixo:
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extensions': [
        'warn',
        {
          extensions: ['.jsx', '.js']
        }
      ],
      'import/prefer-default-export': 'off'
    },

criar o arquivo .prettierrc com o singlequote e trailingcomma


yarn add -D babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import <br/>
configurar o babel.config.js - add plugins 'babel-plugin-root-import' conforme abaixo <br/>
plugins: [
  [
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ],
],

configurar no arquivo eslintrc.js o settings <br/>
settings: {
  'import/resolver': {
    'babel-plugin-root-import': {
      rootPathSuffix: 'src'
    }
  }
}

criar/configurar jsconfig.json <br/>
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}

yarn add styled-components

yarn add prop-types

yarn add react-navigation react-native-gesture-handler react-native-reanimated
//lidam com navegacao e possui componentes específicos para cada plataforma (android/ios), gestos de navegacao e animacoes na navegacao, nesta ordem
ANDROID configurar o gesture handler no MainActivity.java
IOS- ReactNative >= 0.60 - acessar a pasta ios e rodar o pod install para instalar as dependencias nativas do gesture handler e reanimated

criar arquivo de src/routes.js

yarn add react-navigation-stack //caso use o stack navigator - apartir do react-navigation 4 os navigators migraram para um novo repo
yarn add react-navigation-tabs //caso use o tabNavigator

Tipos de navegacao por rotas - Para mais detalhes consulte documentacao
createStackNavigator - cria uma pilha de telas e permite voltar para anterior
createSwitchNavigator - navega de uma tela para outra eliminando a anterior - Ex login para tela inicial
createBottomTabNavigator - criar abas na parte inferior
createMaterialTopTabNavigator - cria abas na parte superior - stileguide android
createDrawerNavigator - cria "menu/aba lateral" - no android eh preciso configurar mais coisas - consulta documentacao

yarn add jetifier -D //faz uma varredura nas dependencias instaladas e faz um fix nelas para dar suporte ao Android X - ate a data deste commit a gesture-handler ainda nao dava suporte ao Android X - por isso a necessidade do jefity <br/>
yarn run jetify // para rodar o fix - deve rodar isso a cada add de libs - podemos automatizar criando um script no packgage.json para executar sempre que yarn add ou npm install: <br/>
"postinstall": "jetify"

yarn add react-native-linear-gradient <br />
ReactNative >= 0.60 necessario pod install - para tal eh preciso o cocoa-pods - instalar pelos gems<br/>
ReactNative <= 0.60 react-native link react-native-linear-gradient <br/>
caso de pau - run-ios novamente ou rebuild no xcode caso esteja rodando no aparelho físico

yarn add react-native-vector-icons //lib de icones para o reactnative
react-native link react-native-vector-icons
AFIM DE EVITAR OS PROBLEMAS DE DUPLICACAO DE FONTES E TER QUE IR NO XCODE REMOVER OS DUPLICADOS USE O NATIVE-BASE
yarn add native-base
react-native link
e usa assim:
import { Icon } from 'native-base';
<Icon type="MaterialIcons" name="add" style={{ fontSize: 20, color: '#fff' }} />




yarn add reactotron-react-native reactotron-redux reactotron-redux-saga
criar o src/config/reactotron.js com as config - --DEV-- configurar no .eslintrc.js no globals/readonly


yarn add react-redux redux redux-saga redux-persist immer

redux-persist > = v6 <br/>
import AsyncStorage from '@react-native-community/async-storage';  <br/>
const persistConfig = {
  //...
  storage: AsyncStorage,
}

yarn add @react-native-community/async-storage
IOS acesse a pasta ios e rode o pod install
ANDROID só rodar novamente react-native run-android


yarn add axios <br/>
// ANDROID <br/>
  // 10.0.2.2 - para o emulador do android studio <br/>
  // 10.0.3.2 - para o emulador genimotion <br/>
  // IP da maquina - para dispositivos físicos <br/>
// iOS - funciona no localhost


yarn add @react-native-community/datetimepicker <br />
IOS - pod install <br />
ANDROID - add linhas ao gradle e import no MainApplication.java - veja mais em https://github.com/react-native-community/react-native-datetimepicker


yarn add yup


@@@@@@@@@@@@@@@@@@



yarn add react-native-webview




$#$#$#$#$#$<br/>
Para executar o android via linha de comando - passa o caminho do emulador normalmente o caminhdo do SDK - o $ANDROID_HOME é a minha variavel de ambiente no macOS:<br/>
~/Android/Sdk/emulator/emulator -avd Pixel_2_API_29<br/>
$ANDROID_HOME/emulator/emulator -avd Pixel_2_API_28<br/>
Evidentemente é necessário um emulador cadastrado com uma imagem, para tal use o AVD, baixe uma imagem e crie um dispositivo emulado



yarn add react-navigation-redux-helpers <br/>
Manter o Estado das Navigations com Redux e utilizar a navegação no sagas




### SplahScreen and icon
#### Android:
  Alterar o **nome do app** - acesse /android/app/src/main/res/values/strings.xml

  **Icone** usar o ape tools image gorilla https://apetools.webprofusion.com/#/tools/imagegorilla<br/>
  Subir um arquivo de imagem do icone de 1024x1024, selecionar android e iOS, clicar em kapow! e baixar o Zip<br/>
  apagar todos as pastas que começam com mipmap em /anroind/app/src/main/res e color as pastas drawable que vieram no zip/android <br/>
  apontar para o icone no arquivo /android/app/src/main/res/AndroidManifest:<br/>
  android:icon="@drawable/icon" <br/>
  android:roundIcon="@drawable/icon" <br/>

  **SplahScreen**<br/>
  Podemos adicionar cor ou usar uma imagem - para usar imagem na splashscreen utilize o ape tools gorilla para gerar no formato correto<br/>
  Criar arquivo colors.xml em /android/app/src/main/res/values<br/>
  Criar arquivo background_splah.xml em /android/app/src/main/res/drawable/ e compor como sera nossa splashscreen<br/>
  Adicionar um SplashTheme no arquivo /android/app/src/main/res/styles.xml com o background_splash<br/>
  Adicionar o SplashTheme no AndroidManifest.xml - android:theme="@style/SplashTheme" dentro da tag Activity<br/>

  **Id do pacote**<br/>
  alterar a propriedade applicationId do arquivo /android/app/build.gradle para o formato com.nomedaempresa.nomeapp
