import { createStore, applyMiddleware, compose } from 'redux';
import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import 'firebase/compat/firestore';

import firebase from '../services/firebase';
import rootReducer from './reducers';

// Optional react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize Cloud Firestore through Firebase
firebase.firestore();

const initialState = {};

// Optional redux state logger
// provide useful log message in browser console regarding redux state
const reduxLogger = createLogger();

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

// App store
export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), reduxFirestore(firebase))
);

// React-redux-firebase provider props
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
