import { connect } from './utils';

// export const store = {
// 	hi: 'im the middleware store',
// 	dispatch: ()=>{}
// }

function mapDispatch(dispatch) {
	return {
		setName: (name) => dispatch({ type: 'SET_NAME', payload: name }),
		setReq: (req) => dispatch({ type: 'SET_REQ', payload: req }),
		setRes: (res) => dispatch({ type: 'SET_RES', payload: res })
	}
}

const updateReqAndRes = ({ 
	setName, 
	setReq,
	setRes
}, [req, res]) => {
	
	// setDuration(Date.now())
	// setName(name)
	// setCookie(req.cookies)

}

export default ReqRes = connect(updateReqAndRes, mapDispatch)

