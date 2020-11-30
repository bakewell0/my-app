import actionType from './actionTypes'

function counter(state = {music:98}, action) {
	  switch (action.type) {
	    case actionType.inc:
	      return {music:state.music + 1}
	    case actionType.dec:
	      return {music:state.music - 1}
	    default:
	      return state
	  }
}

export {counter};