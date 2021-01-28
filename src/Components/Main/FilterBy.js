const FilterBy = ({ filterByFunc }) => {
  return (
    <form className="sort-by">
      <label>
        Filter By:
        <select onChange={filterByFunc}>
          <option value="All">All</option>
          <option value="Featured">Featured</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Games">Games</option>
          <option value="Quick">Quick</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
      </label>
    </form>
  );
};

export default FilterBy;
