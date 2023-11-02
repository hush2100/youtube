import React from "react";

const Search = () => {
  return (
    <div id="search">
      <div className="search__inner">
        <label htmlFor="searchInput">
          <span className="ir">검색</span>
        </label>
        <input type="search" id="searchInput" placeholder="검색어를 입력하세요" className="search__input" autoComplete="off"  />
      </div>
    </div>
  );
}

export default Search;