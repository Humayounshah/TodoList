import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './todo.css';

const ListComp = (props) =>{
    const [line,setLine] = useState(false);
   
    const del = () =>{
        setLine(true);
    };

    return (
    <div className='todo_style'>
    <span onClick={del}>
        <DeleteIcon className='deleteicon'/>
        </span>
    <li style={{textDecoration:line ? 'line-through' : 'none'}}>{props.text}</li>
    </div>
    )
}

export default ListComp;