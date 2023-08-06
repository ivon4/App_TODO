import React, { useState } from "react";
import "./cardList.css";
import NewList from "../NewList/newList";
import BotonList from "../BotonList/botonList";

function CardList() {
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
    <section className="card">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit} className="newList">
        <input
          type="text"
          className="nameList"
          id="inputList"
          placeholder="Name List"
          value={newList}
          onChange={handleInputChange}
        />
        {/* <button className="btnnewList">New List</button> */}
        <BotonList />
      </form>
      <ul className="cardsList">
        {lists.map((list, index) => (
          <NewList
            key={index}
            index={index}
            title={list}
            handleListDelete={handleListDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default CardList;
