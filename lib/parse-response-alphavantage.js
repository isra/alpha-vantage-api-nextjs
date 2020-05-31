/**
 * Parse response json
 * @param {*} responseJson
 * @param {*} typeSeries 'Time Series (Daily)' |
 */
const parseReponseAlphavantange = (responseJson, typeSeries) => {
  // Haders
  const {
    '1. Information': information,
    '2. Symbol': symbol,
    '3. Last Refreshed': lastRefresh,
  } = responseJson['Meta Data'];

  // items
  const itemsObj = responseJson[typeSeries];
  const keys = Object.keys(itemsObj);
  const items = keys.map((item) => {
    const {
      '1. open': open,
      '2. high': high,
      '3. low': low,
      '4. close': close,
      '5. volume': volumen,
    } = itemsObj[item];

    return {
      date: item,
      open,
      high,
      low,
      close,
      volumen,
    };
  });

  return {
    header: {
      information,
      symbol,
      lastRefresh,
    },
    items,
  };
};

export default parseReponseAlphavantange;
