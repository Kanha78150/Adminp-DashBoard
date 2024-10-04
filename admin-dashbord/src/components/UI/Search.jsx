import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search position-relative d-flex align-items-center px-3 py-3">
      <FaSearch />
      <input
        type="text"
        placeholder="Search here"
        className=" border-0 ps-2 bg-transparent search-Input"
      />
    </div>
  );
};

export default Search;
