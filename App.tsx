import React from 'react';
import 'react-native-gesture-handler';
import { Router } from 'containers'
import { Provider } from 'react-redux';
import { store } from 'store';



const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;


