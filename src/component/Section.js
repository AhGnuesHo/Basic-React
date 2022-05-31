import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
export default function Section() {

    const plants = useFetch("http://localhost:3001/plants");  

  return (

  <section>
      {plants.map((plant) =>  (
        <div className="card" key ={plant.id}>
          <img src={plant.src} alt={plant.name} />
          <span>{plant.content}</span>
        </div>
      ))}
 </section>

  );
}
