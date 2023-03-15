import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";
export default function KaydedilenlerListesi(props) {
  const hist = useHistory();
  const handleClick = () => {
    hist.push("/");
  };
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={handleClick}>
        Anasayfa
      </div>
    </div>
  );
}
