import React,{useState} from "react"

function InputArea(props){
    const [input,setInput]=useState({title:"",description:""});

    function handleChange(event){
        const {name,value}=event.target;
        setInput( prevInput=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    return(
        <div className="input-box">
            <input 
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="title ..."
            value={input.title}
            />
            <input 
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="write notes ..."
            value={input.description}
            />
            <button onClick={()=>{
                props.onAddNotes(input);
                setInput({title:"",description:""});
            }}>Add</button>
        </div>
    )
}

export default InputArea;