//import { connect } from './utils';
import configureStore from './setupStore';
import performance from './performance';
//import updateReqAndRes from './req-and-res';
export const store = configureStore();

console.info('store = ',store)

export const perf = performance(store)

// export const updateReqAndRes = connect(updateReqAndRes, mapDispatch, store)



