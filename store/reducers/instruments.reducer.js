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
    case fromInstrumentsActions.TMP_FILL_ALL_INSTRUMENTS:
      return {
        ...state,
        itemsStorage: action.payload.map((item) => {
          return {
            ...item,
            filterNode: `${item.Symbol.toString().toLowerCase()} ${item.Name.toString().toLowerCase()}`,
          };
        }),
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
      /**
       * @todo
       * Debería de llamarse desde un servicio
       * con límite en la respuesta
       * por default se hace slice a 5 elementos
       */
      return {
        ...state,
        currentItem: null,
        items: [
          ...state.itemsStorage.filter((item) =>
            item.filterNode.indexOf(action.payload.trim().toLowerCase()) >= 0
              ? true
              : false
          ),
        ].slice(0, 5),
      };
    default:
      return state;
  }
}
