export const connect = (updateState, mapDispatch) => (store) => {

	const dispatchFunctions = mapDispatch(store.dispatch)

	return (name, middleWare) => (...args) => {

		updateState(name, dispatchFunctions, args)

		middleWare(...args)
	}
}

export const logger = ({ getState }) => next => (action) => {
  console.log('will dispatch', action);
  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action);
  console.log('state after dispatch', getState());
  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};
