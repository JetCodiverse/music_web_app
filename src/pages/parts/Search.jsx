import search from "../css/search.css";

function Search() {
  return (
    <div>
      <form id="form">
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search for a music..."
        />
      </form>
    </div>
  );
}

export default Search;
