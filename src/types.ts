export interface IHolding {
  name: string;
  value: number;
}

export interface ITicker {
  name: string,
  symbol: string,
  priceBtc: number,
  priceUsd: number
}

export interface IStoreState {
    holdings: Array<IHolding>;
    tickers: Array<ITicker>;
}
