import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import IndexPage from '../pages/IndexPage';

export const App: React.FC = () => {
  return (
    <Switch>
      <DefaultLayout>
        <Route path="/" exact component={IndexPage} />
      </DefaultLayout>
    </Switch>
  );
};
