import React from "react";

interface Props {
  catFilters: string[];
  onChangeFilter: (filter: string) => void;
}

const ExpenseFilter = ({ catFilters, onChangeFilter }: Props) => {
  return (
    <>
      <div className="mb-5">
        <select
          id="category"
          className="form-select"
          aria-label="All Categories"
        onChange={(event) => onChangeFilter(event.target.value)}>
          <option value="all" selected>
            All Categories
          </option>
          {catFilters.map((catFilter) => (
            <option value={catFilter}>{catFilter}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;
