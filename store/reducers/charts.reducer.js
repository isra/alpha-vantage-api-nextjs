import * as fromChartsActions from '../actions/charts.actions';

const initialState = {
  items: [],
  current: null,
  history: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case fromChartsActions.LOAD_CHART:
      return {
        ...state,
        history: [...state.items.reverse()],
        items: [action.payload, ...state.items],
        current: action.payload,
      };
    default:
      return state;
  }
}
