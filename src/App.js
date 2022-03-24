import React from 'react';
import List from './components/List';
import { ContextProvider } from './components/context';

import './App.css';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
        <List/>
      </div>
    </ContextProvider>
  );
}

export default App;
