
import { ListItemText, List, ListItem,  ListItemAvatar, Button, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Todo.css'
import db  from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todo(props) {
    // const [open, setOpen] = useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    return (
        <>
            {/* <Modal open={open} onClose={setOpen(false)}>
                <div>
                    <h1>I am a modal</h1>
                    <button onClick={e => setOpen(false)}></button>
                </div>
            </Modal> */}
            <List className='todo__list'>
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
            <span className='span__space'>👉🏼</span>
            <ListItemText className='input_space' primary={props.todo.todo} secondary="" />
            </ListItem>
            <DeleteForeverIcon className='delete__button' onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
            </List>
        </>
    )
}

export default Todo
