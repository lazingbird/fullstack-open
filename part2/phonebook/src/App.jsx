import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Form from "./Form";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const onHandleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  const onHandleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onHandlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const doesExist = (element) => element.name === newName;
    if (persons.some(doesExist)) {
      alert(`${newName} is already in the phonebook`);
    } else {
      const newObject = {
        name: newName,
        phone: newPhone,
      };
      setPersons(persons.concat(newObject));
      setNewName("");
      d;
    }
  };

  const checkFilter = () => {
    if (filterName.length > 0) {
      return persons.filter((person) =>
        person.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }
    return persons;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterName} onChange={onHandleFilterChange}></Filter>
      <h2>add a new</h2>
      <Form
        onSubmit={onHandleSubmit}
        onNameChange={onHandleNameChange}
        onPhoneChange={onHandlePhoneChange}
        nameValue={newName}
        phoneValue={newPhone}
      ></Form>
      <div>
        <h2>Numbers</h2>
        <Persons persons={checkFilter()}></Persons>
      </div>
    </div>
  );
};

export default App;
