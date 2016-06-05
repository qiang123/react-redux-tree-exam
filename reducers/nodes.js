const node = (state, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return {
        id: action.id,
        text: action.text,
        expanded: false
      }
    case 'TOGGLE_NODE':
      if (state.id !== action.id) {
        if(state.nodes) {
           state.nodes = nodes(state.nodes, action)
        }
        return state
      }

      return Object.assign({}, state, {
        expanded: !state.expanded
      })
    default:
      return state
  }
}

const nodes = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_NODE':
      return [
        ...state,
        node(undefined, action)
      ]
    case 'TOGGLE_NODE':
      return state.map(t =>
        node(t, action)
      )
    default:
      return state
  }
}

export default nodes
