import { connect } from 'react-redux'
import { toggleNode } from '../actions'
import Tree from '../components/Tree'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    nodes: state.nodes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNodeClick: (id) => {
      dispatch(toggleNode(id))
    }
  }
}

const TreeView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree)

export default TreeView
