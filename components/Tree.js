import React, { PropTypes } from 'react'
import Node from './Node'

const Tree = ({nodes, onNodeClick}) => (
    <ul>
    {
        nodes.map( node => 
            <Node key={node.id} {...node}
                onClick={onNodeClick}/>
        )
    }
    </ul>
)

Tree.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onNodeClick: PropTypes.func.isRequired
}

export default Tree;