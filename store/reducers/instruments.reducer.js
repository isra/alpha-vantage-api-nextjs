import * as fromInstrumentsActions from '../actions/instruments.actions';
const initialState = {
  items: [],
  itemsStorage: [],
  currentItem: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case fromInstrumentsActions.LOAD_INSTRUMENTS:
      return {
        ...state,
        items: action.payload,
      };
    case fromInstrumentsActions.GET_INSTRUMENTS:
      return {
        ...state,
        currentItem: null,
      };
    case fromInstrumentsActions.GET_BY_ID:
      return {
        ...state,
        currentItem: Object.assign(
          {},
          state.items.find((item) => items.Symbol === action.payload)
        ),
      };
    case fromInstrumentsActions.FILTER:
      return {
        ...state,
        currentItem: null,
        items: [
          ...state.items.filter(
            (item) => item.dataFilter.indexOf(action.payload) >= 0
          ),
        ],
      };
    default:
      return state;
  }
}
