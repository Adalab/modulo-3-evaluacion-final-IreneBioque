import FilterByName from './FilterByName';
import FilterBySpice from './FilterBySpice';
import '../styles/layout/_form.scss';
import FilterByOrigin from './FilterByOirigin';

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
        <section className='form__checkeds'>
          <FilterByOrigin
            name='Unknow'
            handleSearchOrigin={props.handleSearchUnknow}
            Origin={props.Unknow}
          />
          <FilterByOrigin
            name='Earth'
            handleSearchOrigin={props.handleSearchEarth}
            Origin={props.earth}
          />
          <FilterByOrigin
            name='Abadango'
            handleSearchOrigin={props.handleSearchAbadango}
            Origin={props.abadango}
          />
        </section>
      </form>
    </>
  );
};

export default Form;
