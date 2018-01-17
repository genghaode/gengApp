import { App } from '../../App'

export const nav = (state, action) => {
	let nextState
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state
}