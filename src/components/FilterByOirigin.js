const FilterByOrigin = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchOrigin(ev.target.checked);
  };
  return (
    <>
      <label htmlFor='name' className='labelChecked'>
        {props.name}
      </label>
      <input
        type='checkbox'
        className='inputChecked'
        name='name'
        id='name'
        value={props.name}
        onChange={handleInputChange}
        checked={props.Origin}
      />
    </>
  );
};
export default FilterByOrigin;
