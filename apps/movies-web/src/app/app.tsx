import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import IndexPage from '../pages/IndexPage';
import { AppTheme } from '../themes/AppTheme';

const graphqlClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL || '',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <AppTheme>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <BrowserRouter>
            <Switch>
                <Route path="/" exact component={IndexPage} />
            </Switch>
          </BrowserRouter>
        </LocalizationProvider>
      </AppTheme>
    </ApolloProvider>
  );
};

export default App;
