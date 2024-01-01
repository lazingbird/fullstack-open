const Filter = ({ filterValue, onChange }) => {
  return (
    <div>
      filter by name: <input value={filterValue} onChange={onChange} />
    </div>
  );
};

export default Filter;
