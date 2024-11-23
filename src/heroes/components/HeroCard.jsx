import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
/*     if (alter_ego === characters) {
        return (<></>);
    } */

    return ( alter_ego !== characters )
        ? <p className="card-text">{characters}</p>
        : <></>;
        
}


CharactersByHero.propTypes = {
    alter_ego: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired
}

export const HeroCard = ({ hero }) => {

    const { id, superhero, alter_ego, characters, first_appearance } = hero;
    const imgPath = `./assets/imgs/heroes/${id}.jpg`;

    //const charactersByHero = (<p className="card-text">{characters}</p>);

    return (
        <div key={id} className="col  animate__animated animate__fadeIn">
            <div className="card ">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imgPath} className="card-img-top img-thumbnail" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {/* {
                                (alter_ego !== characters)
                                && charactersByHero
                            } */}

                            <CharactersByHero alter_ego={alter_ego} characters={characters} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeroCard.propTypes = {
    hero: PropTypes.object.isRequired
}
