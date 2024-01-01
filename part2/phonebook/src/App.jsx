import { useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterName, setFilterName] = useState("");

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

  const filterByName = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

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
        <Persons persons={filterByName}></Persons>
      </div>
    </div>
  );
};

export default App;
