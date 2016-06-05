import { combineReducers } from 'redux'
import nodes from './nodes'
import visibilityFilter from './visibilityFilter'

const treeApp = combineReducers({
  nodes,
  visibilityFilter
})

export default treeApp
