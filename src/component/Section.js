
export default function Section({items}) {

  return (
  <section>
      {items.map((plant) =>  (
        <div className="card" key ={plant.name}>
          <img src={plant.src} alt={plant.name} />
          <span>{plant.content}</span>
        </div>
      ))}
 </section>

  );
}
