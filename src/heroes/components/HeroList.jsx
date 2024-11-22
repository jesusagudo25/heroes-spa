import { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';
import PropTypes from 'prop-types';

export const HeroList = ({ publisher }) => {

  //Esto aqui se podria optimizar, ya que cada vez que se renderiza el componente se esta llamando a la funcion getHeroesByPublisher. Solo si no se ha consultado antes se deberia llamar a la funcion. Las opciones son usar useMemo o usar un custom hook, LocalStorage, etc.
  //const heroes = getHeroesByPublisher(publisher);
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  //Funcionamiento: Si el valor de publisher cambia, se vuelve a ejecutar la funcion getHeroesByPublisher, si no cambiara, no se ejecutara la funcion getHeroesByPublisher
  //Internamente se esta usando el hook useMemo para que la funcion getHeroesByPublisher no se ejecute cada vez que se renderiza el componente, solo se ejecutara si el valor de publisher cambia.
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))
      }
    </div>
  )
}


HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
