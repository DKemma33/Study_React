import React from 'react';
import { AnimalProvider } from './AnimalContext';
import AnimalContainer from './AnimalContainer';

const App = () => {
  return (
    <AnimalProvider>
      <AnimalContainer/>
    </AnimalProvider>
  );
};

export default App;