import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../fixtures/constants';

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((error) => dispatch({ type: LOGIN_ERROR, payload: error }));
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        return firestore.collection('users').doc(response.user.uid).set({
          username: newUser.username,
          accountType: newUser.accountType,
        });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((error) => dispatch({ type: SIGNUP_ERROR, payload: error }));
  };
};