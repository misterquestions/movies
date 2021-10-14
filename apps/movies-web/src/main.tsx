import { LocalizationProvider } from '@mui/lab';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { AppTheme } from './themes/AppTheme';

ReactDOM.render(
  <StrictMode>
    <AppTheme>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalizationProvider>
    </AppTheme>
  </StrictMode>,
  document.getElementById('root')
);
