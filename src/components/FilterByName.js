import '../styles/layout/_form.scss';

const FilterByName = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchName(ev.target.value);
  };

  return (
    <>
      <label htmlFor='name' className='form__label'>
        Busca por el nombre de tu personaje:
      </label>
      <input
        className='form__input'
        type='text'
        name='name'
        id='name'
        placeholder='Busca el nombre de tu personaje'
        value={props.valueSearchName}
        onChange={handleInputChange}
      />
    </>
  );
};
export default FilterByName;
