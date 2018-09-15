
import { createStore, applyMiddleware, } from 'redux';
import reducers from './reducers';
import { logger } from './utils';
const middleware = [logger];

const setupStore = () => {
	const store = createStore(
		reducers,
		applyMiddleware(...middleware),
	);

// 	if (module.hot) {
// 		module.hot.accept('../reducers', () => {
// 			store.replaceReducer(require('../reducers/'));
// 		});
// 	}
	
	return store;
};

export default setupStore;

