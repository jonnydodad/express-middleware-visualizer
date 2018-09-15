



export default ( state = {initState: ['why why why']}, { type, name, route, time } ) => {

	switch ( type ) {
		case 'SET_DURATION':
		const newState = { ...state }
		if (!newState[route])
		  newState[route] = [{ name: name, time: Date.now(), prevDuration: 0 }]
		else
			newState[route] = [ 
			  ...newState[route], 
			  { name: name, time: Date.now(), prevDuration: Date.now() - newState[route][newState[route].length-1].time } 
		  ]  

		return newState

		default:
			return state
	}
}