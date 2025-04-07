export function exchangeChangeRates(
  ratesList: exchangeRate[],
  selectedExchange: string
) {

  const selectedRates: exchangeRate[] = [];
  ratesList.map((e) => {
    const tmp: exchangeRate | undefined = handleSelect(e, selectedExchange);
    if (tmp) selectedRates.push(tmp);
  });
  return selectedRates;
}

function handleSelect(
  rate: exchangeRate,
  selectedExchange: string
): exchangeRate | undefined {
  if (rate.currencyFrom == selectedExchange) {
    return rate;
  }
  return;
}

function combineExchangeRates(
  rate1: exchangeRate,
  rate2: exchangeRate
): exchangeRate | undefined {
  if (rate1.currencyTo === rate2.currencyFrom) {
    return {
      currencyFrom: rate1.currencyFrom,
      currencyTo: rate2.currencyTo,
      rate: rate1.rate * rate2.rate
    };
  }
  return undefined;
}

export function findAndCombineExchangeRates(
  ratesList: exchangeRate[]
): exchangeRate[] {
  const combinedRates: exchangeRate[] = [];
  const seenRates = new Set<string>();

  for (let i = 0; i < ratesList.length; i++) {
    for (let j = 0; j < ratesList.length; j++) {
      if (i !== j) {
        const combinedRate = combineExchangeRates(ratesList[i], ratesList[j]);
        if (combinedRate) {
          const rateKey = `${combinedRate.currencyFrom}-${combinedRate.currencyFrom}`;
          if (!seenRates.has(rateKey)) {
            seenRates.add(rateKey);
            combinedRates.push(combinedRate);
          }
        }
      }
    }
  }
  
  return combinedRates;
}
