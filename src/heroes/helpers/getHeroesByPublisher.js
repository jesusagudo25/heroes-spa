import { heroes } from '../data/heroes';

// This function receives a publisher and returns an array of heroes that match the publisher.
export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" not valid`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}
