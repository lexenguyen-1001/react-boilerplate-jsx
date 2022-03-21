import React from 'react';
import { useRoutes } from 'react-router-dom';

import Counter from './features/Counter';

import './assets/styles/index.css';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Counter />,
    },
  ]);

  return routes;
};

export default App;
