import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// i18next modules
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// general component
import App from './source/AppRouter';

// reset-css
import 'ress';

// core styles file
import './source/styles/styles.sass';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </AppContainer>,
    document.getElementById('root')
  );
};

//render App on init
render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./source/components/App', () => { render(App) } );
}
