import { heroes } from '../data/heroes';

// This function receives a id and returns the hero that matches the id.
export const getHeroById = (id) => {

    return heroes.find(hero => hero.id === id);
}
