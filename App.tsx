import React from 'react';
import {rootStore} from './src/mst/index';
import {Provider} from 'mobx-react';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider rootTree={rootStore}>
      <Navigation />
    </Provider>
  );
};

export default App;
