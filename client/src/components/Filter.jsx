import React from "react";

const Filter = ({filterSize}) => {

  console.log(filterSize)
  return (
    <div>
      <select
        className="filter-size"
        name="size"
        id=""
        defaultValue="size"
      >
        <option hidden value="size">
          size
        </option>
        <option className="option" value={filterSize}>
          {filterSize}
        </option>
      </select>
    </div>
  );
};

export default Filter;
