const Persons = ({ persons }) => {
  return persons.map((person) => {
    return (
      <p key={person.id}>
        {person.name} {person.phone}
      </p>
    );
  });
};

export default Persons;
