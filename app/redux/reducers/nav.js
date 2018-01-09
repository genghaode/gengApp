import { App } from '../../App'

export const nav = (state, action) => {
	const newState = App.router.getStateForAction(action, state)
	return newState || state
}