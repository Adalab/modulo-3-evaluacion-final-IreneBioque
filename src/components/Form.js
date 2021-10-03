import FilterByName from './FilterByName';
import FilterBySpice from './FilterBySpice';
import '../styles/layout/_form.scss';

const Form = (props) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form className='form' onSubmit={handleFormSubmit}>
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
