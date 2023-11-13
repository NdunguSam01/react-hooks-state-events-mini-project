import React from "react";

function CategoryFilter({categories, categoryButtonClick}) 
{
  const renderButtons= categories.map((category)=>
  {
    return (
      <button key={category} onClick={()=> categoryButtonClick(category)} >{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
