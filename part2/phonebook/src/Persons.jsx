const Persons = ({ persons, handleDelete }) => {
  return persons.map((person) => {
    return (
      <p key={person.id}>
        {person.name} {person.phone}{" "}
        <button onClick={() => handleDelete(person.id)}>delete</button>
      </p>
    );
  });
};

export default Persons;
