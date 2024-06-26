import React from "react"
// import DeleteIcon from "@mui/icons-material/Delete";

function Note(props){
    console.log(props)
    const detailsList = props.details.map((detail, index) => (
        <div onClick={()=>props.delete(index)}>
            <p className='note' key={index}><h1>{detail.title}</h1> {detail.content}</p>
            
        </div>
    ));

    return detailsList
   
  }
export default Note;  