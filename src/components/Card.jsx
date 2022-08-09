import { useGifs } from "../hooks/useGifs";

export function Card({ category }) {
  const imagenes = useGifs(category);

  return (
    <div className="card col-12 mt-2">
      <div className="card-header">
        <h4>{category}</h4>
      </div>
      <div className="card-body">
        <div className="d-flex flex-wrap">
          {imagenes.map((img) => (
            <div key={img.url}>
              <img src={img.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
