import react , { useState } from "react";
import Header from "./Header"
import InputArea from "./InputArea"
import ToDoItem from "./ToDoItem"
function App() {

  const [items, setItems] = useState([]);

  function addItems(title){
    setItems(prevItems => {
      return [...prevItems,title]
    })
  }

  function deleteItems(id){
    setItems((prevItems,key) => {
      return prevItems.filter((item,index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className="container">
    <div className="heading">
    <h1>To-Do List</h1>
    </div>
    <div>
    <InputArea
     add={addItems}
     />
    <ul>
    {items.map((item,index) => {
      return (
        <ToDoItem
         text={item}
         key={index}
         id={index}
         onChecked={deleteItems}
         />
      )
      })}
    </ul>
    </div>
    </div>


  );}

export default App;
