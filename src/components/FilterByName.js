const FilterByName = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchName(ev.target.value);
  };

  return (
    <>
      <label htmlFor='name'>Busca por el nombre de tu personaje:</label>
      <input
        type='text'
        name='name'
        id='name'
        value={props.valueSearchName}
        onChange={handleInputChange}
      />
    </>
  );
};
export default FilterByName;
