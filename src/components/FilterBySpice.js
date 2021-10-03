import '../styles/layout/_form.scss';

const FilterBySpice = (props) => {
  const handleSelectChange = (ev) => {
    props.handleSearchSpices(ev.currentTarget.value);
  };
  return (
    <>
      <label className='form__label' htmlFor='gender'>
        Spices:
      </label>
      <select
        className='form__input'
        name='Spices'
        id='Spices'
        value={props.searchSpices}
        onChange={handleSelectChange}
      >
        <option value='all'>All</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
        <option value='Humanoid'>Humanoid</option>
        <option value='Robot'>Robot</option>
      </select>
    </>
  );
};
export default FilterBySpice;
