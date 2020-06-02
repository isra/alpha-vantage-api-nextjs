import * as fromChartsActions from '../actions/charts.actions';

const initialState = {
  items: [],
  current: null,
  history: [],
  selected: null,
};

const updateItems = (items, newItem) => {
  return items.map((item) => {
    if (item.header.symbol === newItem.header.symbol) {
      return newItem;
    } else {
      return {
        ...item,
      };
    }
  });
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
    case fromChartsActions.CHANGE_ENDPOINT_BY_CHART:
      return {
        ...state,
        items: updateItems(state.items, action.payload),
        current: updateItems(state.items, action.payload)[0],
        history: updateItems(state.items, action.payload).slice(1),
      };
    default:
      return state;
  }
}
