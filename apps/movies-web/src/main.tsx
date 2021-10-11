import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { AppTheme } from './themes/AppTheme';

ReactDOM.render(
  <StrictMode>
    <AppTheme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppTheme>
  </StrictMode>,
  document.getElementById('root')
);
