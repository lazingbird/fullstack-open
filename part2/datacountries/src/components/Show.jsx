import ShowWeather from "./ShowWeather";

const Show = ({ isShow, parentElement }) => {
  if (isShow) {
    let languagesList = [];
    for (const key in parentElement.languages) {
      languagesList.push(parentElement.languages[key]);
    }
    return (
      <div>
        <h2>{parentElement.name.common}</h2>
        <p>Capital: {parentElement.capital}</p>
        <p>Area: {parentElement.area} km²</p>
        <h3>Languages:</h3>
        <ul>
          {languagesList.map((language) => {
            return <li key={language}>{language}</li>;
          })}
        </ul>
        <img
          src={parentElement.flags.png}
          alt={`${parentElement.name.common} flag`}
        />
        <h2>Weather in {parentElement.capital}</h2>
        <ShowWeather capital={parentElement.capital}></ShowWeather>
      </div>
    );
  }
};

export default Show;
