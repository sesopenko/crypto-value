export interface IHolding {
    code: string;
    value: number;
  }

export interface IStoreState {
    holdings: IHolding[];
}
