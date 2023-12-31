import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <>
            <Header key={course.id} name={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
          </>
        );
      })}
    </>
  );
};

export default Course;
