import PropTypes from 'prop-types';

import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

  //Esto aqui se podria optimizar, ya que cada vez que se renderiza el componente se esta llamando a la funcion getHeroesByPublisher. Solo si no se ha consultado antes se deberia llamar a la funcion. Las opciones son usar useMemo o usar un custom hook, LocalStorage, etc.
  const heroes = getHeroesByPublisher(publisher);

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
