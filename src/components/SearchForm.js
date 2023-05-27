import { useGlobalContext } from "../context";
import { useEffect, useRef } from "react";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef("");

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchRef.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchRef}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
