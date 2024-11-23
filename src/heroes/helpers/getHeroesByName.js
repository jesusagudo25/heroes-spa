import { heroes } from '../data/heroes';

// This function receives a name and returns the hero that matches the name.
export const getHeroesByName = (name = '') => {

    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}
