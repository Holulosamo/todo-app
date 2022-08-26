import { createContext, useState } from "react";

const FilterContext = createContext();

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.done,
  Completed: (task) => task.done,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const FilterProvider = ({children}) => {
  const [filter, setFilter] = useState("All");

  const filterData = {
    filter,
    setFilter,
    FILTER_MAP,
    FILTER_NAMES
  }

  return (
    <FilterContext.Provider value={filterData}>
        {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider };
export default FilterContext;