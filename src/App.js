import React from 'react';
import './App.css';
import Issue from './container/issueContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Issue />
    </Provider>
  );
}

export default App;
