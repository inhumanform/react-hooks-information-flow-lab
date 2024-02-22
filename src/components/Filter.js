import React from "react";
// Similar as before with the header. Import React, pass through the function as a prop to the filter component being sure to name it onCategorychange to pass the test
function Filter ({onCategoryChange}) {

    return (
<div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

    );
}

export default Filter;