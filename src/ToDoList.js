import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ListComp from './ListComp';
import './todo.css';

const ToDoList = () => {

    const[item ,setItem] = useState("");
    const [newitem,setNewItem] = useState([]); 

    const itemEvent = (event) =>{
       setItem(event.target.value);
    };

    const listOfItems = () => {
        setNewItem((prev)=>{
            return [
                ...prev,
                item
            ]
        });
        setItem(" ");
    };

return(
        <>
            <div className='main'>
                <div className='center_div'>
                <br/>
                <h1>ToDo List </h1>
                <br/>
                <input type='text' value={item}  placeholder='Add Items' onChange={itemEvent}/>
                <Button className='newbtn' onClick={listOfItems}>
                    <AddRoundedIcon/>
                </Button>
                <br/>
                <ul>
                        {newitem.map((val,index)=>{
                            return <ListComp key={index} text={val}/>
                        })}
                </ul>
                </div>
            </div>
        </>
    )
};

export default ToDoList;