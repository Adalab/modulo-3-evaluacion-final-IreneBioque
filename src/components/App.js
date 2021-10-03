import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/App.scss';
import callToApi from '../services/api';
import Form from './Form';
import CharactherList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFoundPage from './NotFoundPage';

const App = () => {
  const [characters, Setcharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpices, setsearchSpices] = useState('all');

  useEffect(() => {
    callToApi(searchName).then((response) => {
      Setcharacters(response);
    });
  }, [searchName]);

  const handleSearchName = (value) => {
    setSearchName(value);
  };
  const handleSearchSpices = (value) => {
    setsearchSpices(value);
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
    );
  const orden = filteredData.sort();
  console.log(orden);
  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  const selectedContact = characters.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <h1>Rick y Morty</h1>
          <Form
            valueSearchName={searchName}
            handleSearchName={handleSearchName}
            valueSearchSpice={searchSpices}
            handleSearchSpices={handleSearchSpices}
          />
          <h2>Personajes con el nombre: {searchName}</h2>
          <CharactherList data={filteredData} searchName={searchName} />
        </Route>

        <Route path='/character/:id'>
          <section>
            <CharacterDetail character={selectedContact} />
          </section>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
