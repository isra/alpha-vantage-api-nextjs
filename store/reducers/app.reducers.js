import * as fromAppActions from '../actions/app.actions';

const initialState = {
  progress: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case fromAppActions.LOADING:
      return {
        ...state,
        progress: !state.progress,
      };
    default:
      return state;
  }
}
