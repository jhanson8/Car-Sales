import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {addReducer }from './reducers/reducer.js';






const store = createStore(addReducer);
console.log(store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
