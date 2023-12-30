export default function Content(props) {
  const Part = (props) => {
    return (
      <p>
        {props.title} {props.exercises}
      </p>
    );
  };

  return (
    <div>
      <Part title={props.title1} exercises={props.exercises1}></Part>
      <Part title={props.title2} exercises={props.exercises2}></Part>
      <Part title={props.title3} exercises={props.exercises3}></Part>
    </div>
  );
}
