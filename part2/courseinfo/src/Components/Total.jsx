const Total = ({ parts }) => {
  console.log(parts);
  const total = parts.reduce((sum, current) => {
    return sum + current.exercises;
  }, 0);
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
};

export default Total;
