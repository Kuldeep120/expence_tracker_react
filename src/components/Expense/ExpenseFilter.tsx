import React from "react";

interface Props {
  catFilters: string[];
  onChangeFilter: () => void;
}

const ExpenseFilter = ({ catFilters, onChangeFilter }: Props) => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select Category
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {catFilters.map((catFilter) => (
            <button className="dropdown-item" type="button">
              {catFilter}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpenseFilter;
