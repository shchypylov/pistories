import * as actions from "../ac";

export function imageReducer(state = {}, action) {
	switch (action.type) {
		case actions.IMAGE_LOADED:
			console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
}