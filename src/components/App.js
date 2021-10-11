import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/layout/_characterDetail.scss';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Form from './Form';
import CharactherList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpices, setsearchSpices] = useState('all');
  const [searchOrigin, setSearchOrigin] = useState({
    earth: false,
    Unknow: false,
    Abadango: false,
  });

  useEffect(() => {
    callToApi(searchName).then((response) => {
      setCharacters(response);
    });
  }, [searchName]);

  const handleSearchName = (value) => {
    setSearchName(value);
  };
  const handleSearchSpices = (value) => {
    setsearchSpices(value);
  };
  const handleSearchEarth = (checked) => {
    setSearchOrigin({ ...searchOrigin, earth: checked });
  };
  const handleSearchUnknow = (checked) => {
    setSearchOrigin({ ...searchOrigin, Unknow: checked });
  };
  const handleSearchAbadango = (checked) => {
    setSearchOrigin({ ...searchOrigin, Abadango: checked });
  };
  const filteredData = characters
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (character) =>
        searchSpices === 'all' || searchSpices === character.species
    )
    .filter((character) => {
      if (searchOrigin.earth) {
        return character.planet === 'Earth (C-137)';
      } else if (searchOrigin.Unknow) {
        return character.planet === 'unknown';
      } else if (searchOrigin.Abadango) {
        return character.planet === 'Abadango';
      }
      return true;
    })
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  const selectedContact = characters.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <div className='page'>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Form
              valueSearchName={searchName}
              handleSearchName={handleSearchName}
              valueSearchSpice={searchSpices}
              handleSearchSpices={handleSearchSpices}
              handleSearchEarth={handleSearchEarth}
              handleSearchUnknow={handleSearchUnknow}
              handleSearchAbadango={handleSearchAbadango}
              earth={searchOrigin.earth}
              unknow={searchOrigin.Unknow}
              abadango={searchOrigin.Abadango}
            />
            <CharactherList data={filteredData} searchName={searchName} />
          </Route>

          <Route path='/character/:id'>
            <section className='characterDetail'>
              <CharacterDetail character={selectedContact} />
            </section>
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
