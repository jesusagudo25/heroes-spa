import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const Hero = () => {

  const { heroId } = useParams();
  //Esta funcion se podria optimizar para que no se ejecute cada vez que se renderiza el componente, es decir. Si ya se cargo la informacion del heroe, no se deberia volver a llamar a la funcion getHeroById. Las opciones son usar useMemo o usar un custom hook, LocalStorage, etc.
  //const hero = getHeroById(heroId);
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  //Funcionamiento: Si el valor de heroId cambia, se vuelve a ejecutar la funcion getHeroById, si no cambiara, no se ejecutara la funcion getHeroById.

  const navigate = useNavigate();

  const onReturn = () => {
    if (hero.publisher === 'Marvel Comics') {
      navigate('/marvel');
    } else {
      navigate('/dc');
    }

    //Or navigate(-1);
  };

  if (!hero) {
    //not found - 404 (OR )
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Hero</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <img
            src={`/assets/imgs/heroes/${hero.id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <b>Alter ego:</b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance:</b> {hero.first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{hero.characters}</p>
          <button className="btn btn-outline-info" onClick={onReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  )
}
