import { HeroCard } from '../components'
import { useForm } from '../../hooks/'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroesFiltered = getHeroesByName(q);

  const { searchText, handleInputChange, handleReset } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.trim()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn mt-3 btn-block btn-outline-primary"
            >
              Search...
            </button>

            <button
              type="reset"
              className="btn mt-3 btn-block btn-outline-danger"
              style={{ marginLeft: '10px' }}
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="animate__animated animate__fadeIn">
            <div className="alert alert-info">Search a hero...</div>
          </div>

          <div className="animate__animated animate__fadeIn">
            <div className="alert alert-danger">Not hero with <b>{q}</b></div>
          </div>

          <div className="d-flex gap-2 flex-column">
            {heroesFiltered.map(hero => (
              <HeroCard key={hero.id} hero={hero} />
            ))} 
          </div>
        </div>
      </div>
    </>
  )
}
