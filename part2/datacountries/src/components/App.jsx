import { useEffect, useState } from "react";

import countriesService from "../services/countries";

import List from "./List";
import Find from "./Find";

function App() {
  const [countries, setCountries] = useState(null);
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    countriesService
      .getAll()
      .then((countriesData) => setCountries(countriesData));
  }, []);

  const onChangeFilter = (event) => {
    setFilterValue(event.target.value);
  };

  const checkFilter = () => {
    if (filterValue !== null) {
      return countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return countries;
  };

  if (!countries) {
    return null;
  }

  return (
    <>
      <main>
        <Find value={filterValue} onChange={onChangeFilter}></Find>
        <List items={checkFilter()}></List>
      </main>
    </>
  );
}

export default App;
