import React, { PropTypes } from 'react';
import Tree from './Tree';

const Node = ({onClick, expanded, text, id, nodes}) => {
    let className = nodes? (expanded? 'fa fa-minus' : 'fa fa-plus') : ''; 
    return (
    <li>
     {/* <div onClick={() => onClick(id)} style={{textDecoration: completed? 'line-through' : 'none'}}> */}
     <i className={className} onClick={() => onClick(id)}/>
     {text}
     {/* </div> */}
     <div style={{display: expanded? 'block' : 'none'}}>
     {
         nodes && <Tree nodes={nodes} onNodeClick={onClick}/>
     }
     </div>
    </li>
)}

Node.PropTypes = {
    onclick: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    nodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired)
}

export default Node;