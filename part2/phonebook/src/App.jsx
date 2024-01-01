import { useState, useEffect } from "react";
import axios from "axios";
import personsService from "./services/persons";
import Filter from "./Filter";
import Form from "./Form";
import Persons from "./Persons";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterName, setFilterName] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const onHandleDelete = (id) => {
    if (window.confirm("You're sure that you want to delete it?")) {
      personsService.deletePerson(id);
      personsService.getAll().then((response) => {
        setPersons(response.data);
      });
    }
  };

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
      if (
        window.confirm(
          `${newName} is already added to the phonebook. Do you wanna change the phone number for this person?`
        )
      ) {
        const oldObject = persons.find((element) => element.name == newName);
        console.log(oldObject);
        const newObject = {
          name: newName,
          phone: newPhone,
        };
        personsService.update(oldObject.id, newObject).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== oldObject.id ? person : response.data
            )
          );
        });
        setNotification(`${newName} phone number changed`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      }
    } else {
      const newObject = {
        name: newName,
        phone: newPhone,
      };

      personsService.create(newObject).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewPhone("");
        setNotification(`Added ${newName}`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
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
      <Notification message={notification}></Notification>
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
        <Persons
          persons={checkFilter()}
          handleDelete={onHandleDelete}
        ></Persons>
      </div>
    </div>
  );
};

export default App;
