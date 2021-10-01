const Form = (props) => {
  const handleInputChange = (ev) => {
    ev.preventDefault();
    props.handleSearchName(ev.target.value);
  };
  return (
    <>
      <form>
        <label htmlFor="name">Busca por el nombre de tu personaje:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={props.valueForm}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default Form;
