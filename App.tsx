import React from 'react';
import {rootStore} from './src/mst/index';
import {Provider} from 'mobx-react';
import Navigation from './src/navigation';

const App = () => {
  const {rootTree} = rootStore();
  if (!rootTree) {
    return null;
  }
  return (
    <Provider rootTree={rootTree}>
      <Navigation />
    </Provider>
  );
};

export default App;
