import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import dustbinIcon from './assets/dustbin-black.svg';
import penIcon from './assets/pen-black.svg';


function App() {
  const [count, setCount] = useState(0)
  const logo = "AOTasks"
  const obj = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(obj);
  const [editIndex, setEditIndex] = useState(null);
  const [showfinished, setshowfinished] = useState(true)


  const handleDelete = (idx) => {
    const newObj = todos.filter((_, i) => i !== idx);
    setTodos(newObj);
    localStorage.setItem("todos", JSON.stringify(newObj));
  }

  const handleEdit = (idx) => {
    setTodo(todos[idx].todo);
    setEditIndex(idx);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleToggle = (idx) => {
    const newObj = todos.map((item, i) => i === idx ? { ...item, isCompleted: !item.isCompleted } : item);
    setTodos(newObj);
    localStorage.setItem("todos", JSON.stringify(newObj));
  }

  // const handleDoneTasks = () => {
  //   const newObj = todos.filter((item) => item.isCompleted);
  //   setTodos(newObj);
  //   localStorage.setItem("todos", JSON.stringify(newObj));
  // }


  const handleAdd = () => {
    // also fetch from local storage
    const newObj = todos.map((item, i) => i === editIndex ? { ...item, todo } : item);
    if (editIndex !== null) {
      setTodos(newObj);
      setEditIndex(null);
      localStorage.setItem("todos", JSON.stringify(newObj));
    } else {
      const newObj = [...todos, {todo, isCompleted: false}];
      setTodos(newObj);
      localStorage.setItem("todos", JSON.stringify(newObj));
    }
    setTodo("");
    
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const togglefinished = (e) => {
    setshowfinished(!showfinished);
  }

  return (
    <>
    <Navbar logo={logo} />

  <div className="container mx-auto flex flex-col items-center min-h-[70vh] p-4 border border-green-500 rounded-3xl mt-10 bg-[#1a1a1a]">
      <div className="addtodo text-green-500 ">
        <h1 className="text-4xl font-bold typewriter">Add to-do's</h1>
          <input 
            onChange={handleChange} 
            value={todo} 
            type="text" 
            className="textbox border border-green-500 rounded-full px-4 py-2 mt-2 mr-3"
            onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }}
          />
          <button onClick={handleAdd} disabled={todo.length<1} className="bg-green-500 text-black rounded-full cursor-pointer px-4 py-2 mt-4">{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <div className="taskhead text-green-500 flex justify-between items-center w-[50vw] mt-10" ><div className=" text-2xl  font-bold">Your tasks:</div>
      <div><input type="checkbox" className={` mt-3 rounded focus:ring-2 focus:ring-green-400 border-green-500 accent-green-500 bg-green-900' `}
                  checked={showfinished}
                  onChange={togglefinished} /> Show completed</div>
      </div>

 <div className="todos mt-4">
        {todos.length === 0 ? (
          <div className="text-green-500">No tasks added yet!</div>
        ) : (
          todos.filter(item => showfinished || !item.isCompleted)
          .map((item, index) => (
            <div key={index} className="todo text-green-500 border border-green-500 rounded-full p-4 mb-4 flex justify-between items-center w-[60vw]">
              <div className={item.isCompleted ? "line-through decoration-black" : ""}>{item.todo}</div>
              <div className="buts flex gap-3 justify-center items-center">
                <input
                  className={`w-5 h-5 mt-1.5 rounded focus:ring-2 focus:ring-green-400 border-green-500 
                    ${item.isCompleted ? 'accent-green-500 bg-green-900' : 'accent-green-500 bg-black border-green-500'}`}
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => handleToggle(index)}
                />
                <button onClick={() => handleDelete(index)} className="bg-green-500 text-black rounded-full px-4 py-2 mt-2">
                  <img src={dustbinIcon} alt="Delete" className="w-5 h-5 cursor-pointer" />
                </button>
                <button onClick={() => handleEdit(index)} className="bg-green-500 text-black rounded-full px-4 py-2 mt-2">
                  <img src={penIcon} alt="Edit" className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>
          )))}
      </div>
    </div>

    </>
  )
}

export default App
