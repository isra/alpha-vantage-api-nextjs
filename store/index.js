import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import instrumentsReducer from './reducers/instruments.reducer';

/* export const rootReducer = combineReducers({
  instruments: ContactsReducer,
}); */

const reducers = combineReducers({
  instruments: instrumentsReducer,
});

export default function getStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createNextReducer = reducers.default;

      store.replaceReducer(createNextReducer(initialState));
    });
  }

  return store;
}
