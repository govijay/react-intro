import React from "react";
function SearchParams() {
  const location = "San Francisco, CA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
}
export default SearchParams;
