import { connect } from './utils';
//import configureStore from './setupStore';
//const store = configureStore();

// export const store = {
// 	hi: 'im the middleware store',
// 	dispatch: ()=>{}
// }

function mapDispatch(dispatch) {
	return {
		setDuration: (name, route, time) => dispatch({ type: 'SET_DURATION', name: name, route: route, time: time }),
		setName: (name, route) => dispatch({ type: 'SET_NAME', name: name, route: route }),
	}
}

const updatePerf = (
  name,
  { setName, setDuration },
  [ req, res ]
) => {
	setDuration(name, req.url, Date.now())
}


export default connect(updatePerf, mapDispatch)


