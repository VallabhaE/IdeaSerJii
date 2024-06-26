import React ,{useState}from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Fab } from "@mui/material";
// import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [info, editInfo] = useState({
        title: "",
        content: ""
      });
      function handleChange(event){
        const {name , value} = event.target;
        editInfo((prev)=>{
            return {
                ...prev,
                [name] :value
            }
        })
      }

    function clickHandler(event){
        event.preventDefault(); 
        props.chData(info)
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={clickHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
