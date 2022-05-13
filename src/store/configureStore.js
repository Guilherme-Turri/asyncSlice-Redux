import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import contador from './contador.js';
import modal from './modal.js';
//import logger from './middleware/loggger.js';
import localStorage from './middleware/localStorage';

import login from './login.js';
const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({ reducer, middleware });

export default store;
