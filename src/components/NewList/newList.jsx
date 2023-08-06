









import React, { useState, useEffect } from "react";
import "./newList.css";
import BotonTask from "../BotonTask/botonTask";

function NewList(props) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [sortedTasks, setSortedTasks] = useState([]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  useEffect(() => {
    sortTasks();
  }, [tasks]);

  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
    setSortedTasks(sorted);
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = [...sortedTasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setSortedTasks(updatedTasks);
  };
  

  const handleTaskDelete = (index) => {
    const updatedTasks = [...sortedTasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <section className="cardTask">
      <h3 className="taskname">{props.title}</h3>
      <div className="newTask">
        <form onSubmit={handleSubmit} className="formulario">
          <input
            type="text"
            className="nameTask"
            id="inputTask"
            placeholder="Name Task"
            value={newTask}
            onChange={handleInputChange}
          />
          <BotonTask />
          <button
            className="deleteList"
            onClick={() => props.handleListDelete(props.index)}
          >
            Delete List
          </button>
        </form>
      </div>

      <ul>
        {sortedTasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => handleTaskToggle(index)}>•{task.name}</span>
            <button className="delete" onClick={() => handleTaskDelete(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewList;








// import React, { useState, useEffect } from "react";
// import "./newList.css";
// import BotonTask from "../BotonTask/botonTask";

// function NewList(props) {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [sortedTasks, setSortedTasks] = useState([]);

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, { name: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const sortTasks = () => {
//     const sorted = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
//     setSortedTasks(sorted);
//   };

//   useEffect(() => {
//     sortTasks();
//   }, [tasks]);

//   const handleTaskToggle = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };
  

//   const handleTaskDelete = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   return (
//     <section className="card">
//       <h3>{props.title}</h3>
//       <div className="newTask">
//         <form onSubmit={handleSubmit} className="formulario">
//           <input
//             type="text"
//             className="nameTask"
//             id="inputTask"
//             placeholder="Name Task"
//             value={newTask}
//             onChange={handleInputChange}
//           />
//           <BotonTask />
//           {/* <button type="submit">Add Task</button> */}
//         </form>
//       </div>

//       <ul>
//         {sortedTasks.map((task, index) => (
//           <li key={index} className={task.completed ? "completed" : ""}>
//             <span onClick={() => handleTaskToggle(index)}>{task.name}</span> 
          

//             <button className="delete" onClick={() => handleTaskDelete(index)}>
//               x
//             </button>
//           </li>
//         ))}
    
//       </ul>
//     </section>
//   );
// }

// export default NewList;
