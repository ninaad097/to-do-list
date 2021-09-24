import React , { useState } from "react";

function InputArea(props) {
  const [title , setTitle] = useState("");

  function handleChange(event){
    const newValue = event.target.value;
    setTitle(newValue);
  }


  return (
    <div>
    <input onChange={handleChange} type="text" value={title} />
    <button onClick={() => {
      props.add(title);
      setTitle("");
    }
    } >
    <span>ADD</span>
    </button></div>
  );

}
export default InputArea;
