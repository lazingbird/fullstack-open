import { useState } from "react";
import Show from "./Show";

function ListItem({ element, parentElement }) {
  const [show, setShow] = useState(false);
  const onHandleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <p>
        {element}{" "}
        <button onClick={onHandleClick}>
          {show ? "stop showing" : "show"}
        </button>
      </p>
      <Show isShow={show} parentElement={parentElement}></Show>
    </>
  );
}

function List({ items }) {
  if (items.length > 10) {
    return <p>Too many items, specify your search</p>;
  } else if (items.length === 1) {
    let languagesList = [];
    for (const key in items[0].languages) {
      languagesList.push(items[0].languages[key]);
    }
    return (
      <div>
        <h1>{items[0].name.common}</h1>
        <p>Capital: {items[0].capital}</p>
        <p>Area: {items[0].area} km²</p>
        <h2>Languages:</h2>
        <ul>
          {languagesList.map((language) => {
            return <li key={language}>{language}</li>;
          })}
        </ul>
        <img src={items[0].flags.png} alt={`${items[0].name.common} flag`} />
      </div>
    );
  }
  return (
    <>
      {items.map((element) => {
        return (
          <ListItem
            key={element.name.common}
            element={element.name.common}
            parentElement={element}
          />
        );
      })}
    </>
  );
}

export default List;
