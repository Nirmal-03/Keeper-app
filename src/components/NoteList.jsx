import React from 'react'

function NoteList(props){
    return (
        <div className='box'>
            <h2>{props.notes.title}</h2>
            <p>{props.notes.description}</p>
            <button  onClick={()=>{
                props.onDelete(props.id)
            }}>Delete</button>
        </div>
    )
}

export default NoteList;