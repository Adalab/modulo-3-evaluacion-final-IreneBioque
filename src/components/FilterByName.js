import '../styles/layout/_form.scss';

const FilterByName = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchName(ev.target.value);
  };

  return (
    <>
      <label htmlFor='name' className='form__label'>
        Search Name:
      </label>
      <input
        className='form__input'
        type='text'
        name='name'
        id='name'
        placeholder='Search Name:'
        value={props.valueSearchName}
        onChange={handleInputChange}
      />
    </>
  );
};
export default FilterByName;
