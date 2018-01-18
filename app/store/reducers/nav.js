import { getStateForAction, NavigationActions  } from 'react-navigation'
import { App } from '../../App'

export const nav = (state, action) => {
	let nextState
  switch (action.type) {
    case 'Login':
      nextState = App.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    case 'Logout':
      nextState = App.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      break
    default:
      nextState = App.router.getStateForAction(action, state)
      break
  }

  return nextState || state
}