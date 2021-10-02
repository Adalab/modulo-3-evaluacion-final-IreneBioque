const Form = (props) => {
  const handleInputChange = (ev) => {
    props.handleSearchName(ev.target.value);
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Busca por el nombre de tu personaje:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={props.valueForm}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default Form;
