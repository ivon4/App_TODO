import React from "react";
import "./botonDelete.css";

function BotonDelete() {
  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState("");

  const handleInputChange = (e) => {
    setNewList(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newList.trim() !== "") {
      setLists([...lists, newList]);
      setNewList("");
    }
  };

  const handleListDelete = (index) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    setLists(updatedLists);
  };

  return (
    <button
      className="btnDelete"
      onClick={() => props.handleListDelete(props.index)}
    >
      Delete
    </button>
  );
}

export default BotonDelete;
