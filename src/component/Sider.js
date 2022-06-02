import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Modal from "./Modal";
import Section from './Section';
export default function Sider() {
  const [isShowModal, setIsShowModal] = useState(false);

  const plants = useFetch("http://localhost:3001/plants"); 

  const handleShowModal = (value) => {
    setIsShowModal(value);
  }

  return (
    <>
      <aside>
        <button
          id="addPlant"
          onClick={() => { setIsShowModal(true)}}
        >
          Add
        </button>
        <ul id="sideList">
          {plants.map((plant) => {
            return <li key={plant.id}>{plant.name}</li>;
          })}
        </ul>
      </aside>
      <Section/>
      <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </>
  );
}
