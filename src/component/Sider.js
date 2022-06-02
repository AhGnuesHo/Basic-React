import { useState, useEffect } from "react";
import data from '../../src/db/data.json';
import Modal from "./Modal";
import Section from './Section';
export default function Sider() {

  const [plants, setPlants] = useState(data.plants);

  let submitItem = (item) => {
    setPlants([...plants, item]);
  }

  const [isShowModal, setIsShowModal] = useState(false);


  const handleShowModal = (value) => {
    setIsShowModal(value);
  }
  return (
    <>
      <aside>
        <button
          id="addPlant"
          onClick={() => { setIsShowModal(true)}} >
          Add
        </button>
        <ul id="sideList">
          {plants.map((plant) => (
             <li key = {plant.name}>{plant.name}</li>)
          )}
        </ul>
      </aside>
      <Section items = {plants}/>
      <Modal isShowModal={isShowModal} setIsShowModal={handleShowModal} submitItem ={submitItem} />
    </>
  );
}
