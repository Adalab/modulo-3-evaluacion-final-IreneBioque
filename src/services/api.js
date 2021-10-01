const callToApi = (searchName) => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${searchName}`)
    .then((response) => response.json())
    .then((dataApi) => {
      const character = dataApi.results.map((data) => {
        return {
          name: data.name,
          species: data.species,
          id: data.id,
          image: data.image,
        };
      });
      return character;
    });
};

export default callToApi;
