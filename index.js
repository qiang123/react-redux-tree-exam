import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import treeApp from './reducers';
import App from './components/App';

let store = createStore(treeApp, {
  nodes: [
    {
      id: 100, text: 'hello', expanded: false, nodes: [
        { id: 1001, text: 'child hello1', expanded: false, nodes: [
        { id: 10011, text: 'child hello1', expanded: false },
        { id: 10012, text: 'child hello2', expanded: false }
      ] },
        { id: 1002, text: 'child hello2', expanded: false }
      ]
    },
    {
      id: 101, text: 'world', expanded: true, nodes: [
        { id: 1011, text: 'child hello21', expanded: false },
        { id: 1012, text: 'child hello22', expanded: false }
      ]
    }
  ]
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
