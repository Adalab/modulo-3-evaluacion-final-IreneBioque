import FilterByName from './FilterByName';
import FilterBySpice from './FilterBySpice';

const Form = (props) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <FilterByName
          handleSearchName={props.handleSearchName}
          valueSearchName={props.valueSearchName}
        />
        <FilterBySpice
          valueSearchSpice={props.searchSpices}
          handleSearchSpices={props.handleSearchSpices}
        />
      </form>
    </>
  );
};

export default Form;
