const Find = ({ value, onChange }) => {
  if (value === null) {
    value = "";
  }
  return (
    <div>
      Find countries: <input value={value} type="text" onChange={onChange} />
    </div>
  );
};

export default Find;
