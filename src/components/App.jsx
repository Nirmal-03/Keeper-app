import React,{useState} from "react"
import Heading from './Heading'
import InputArea from "./InputArea";
import NoteList from "./NoteList";


function App(){

    const [notes,setNotes]=useState([]);

    function AddNotes(input){
        setNotes(prevValue =>{
            return [...prevValue,input]
        })
    }

    function DeleteNotes(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((item,index)=>{
                return index !==id
            })
        })
    }

    return(
        <div className="container">
            <Heading />
            <div className="input-area">
                <InputArea  onAddNotes={AddNotes}/>
            </div>
            <div className="notes-box">
                {notes.map((items,index)=>{
                    return(
                     <NoteList 
                     key={index}
                     id={index}
                     onDelete={DeleteNotes} 
                     notes={items}
                     />
                    )
                })}
            </div>

        </div>
    )
}

export default App;