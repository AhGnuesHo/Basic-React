import { useState, useEffect } from "react";
import useFatch from "../hooks/useFatch";
import Modal from "./Modal";
import Section from './Section';
export default function Sider() {
  const [isShowModal, setIsShowModal] = useState(false);

  const plants = useFatch("http://localhost:3001/plants"); 

  return (
    <>
      <aside>
        <button
          id="addPlant"
          onClick={() => {
            return setIsShowModal(true);
          }}
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
