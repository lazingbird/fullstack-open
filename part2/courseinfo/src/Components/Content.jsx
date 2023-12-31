import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((element) => (
        <Part key={element.id} part={element}></Part>
      ))}
    </>
  );
};

export default Content;
