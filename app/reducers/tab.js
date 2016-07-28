const initialState = 0
export const tab = (state=initialState, action) => {
  if(action.type === 'SWITCH_TAB'){
    return action.tab
  }
  return state
}
