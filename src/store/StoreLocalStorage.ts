export default (store: any) => {
  const holdingsJson = localStorage.getItem('holdings');
  if (holdingsJson != null) {
    try {
      const holdings = JSON.parse(holdingsJson);
      store.commit('setHoldings', holdings);
    } catch (e) {
      // Nothing to do, leave it be.
    }
  }
  store.subscribe((mutation: any, state: any) => {
    switch (mutation.type) {
      case 'setHolding':
      localStorage.setItem('holdings', JSON.stringify(state.holdings));
      break;
    }
  });
}