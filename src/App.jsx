import { useState } from "react";
import axios from "axios";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSugestions] = useState("");
  const [images, setImages] = useState([]);
  const accessKey = "5gOIvztDV9Uwc_UsC7CG3If4ZMTumuEo58gxCUtf48Q";
  const url = "https://api.unsplash.com/search/photos";
  const url2 = "https://unsplash.com/nautocomplete/";

  const handleChange = (event) => {
    setQuery(event.target.value);
    // axios
    //   .get(url2 + event.target.value)
    //   .then((data) => {
    //     setSugestions(data);
    //     console.log(suggestions);
    //   })
    //   .catch((err) => {
    //     console.log("Error happened during fetching suggestions!", err);
    //   });
  };

  const handleClick = (event) => {
    axios
      .get(url, {
        params: { query: query, page: 1, client_id: accessKey, per_page: 24 },
      })
      .then((data) => {
        setImages(data.data.results);
        console.log(images);
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };

  const imagesList = (
    <div className="grid">
      {images.map((image) => (
        <ListItem key={image.id} image={image} />
      ))}
    </div>
  );

  return (
    <>
      <div className="App">
        <h1>Unsplash photo search</h1>
        <input
          onChange={handleChange}
          type="test"
          name="photo"
          placeholder="Search for photo"
        ></input>
        <button onClick={handleClick}> Search</button>
      </div>
      <div className="card-list">{imagesList}</div>
    </>
  );
}

export default App;
/* <>
<form className="form" onSubmit={searchPhotos}>
  {" "}
  <label className="label" htmlFor="query">
    {" "}
    📷
  </label>
  <input
    type="text"
    name="query"
    className="input"
    placeholder={`Try "dog" or "apple"`}
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button type="submit" className="button">
    Search
  </button>
</form>

<div className="card-list">
  {pics.map((pic) => (
    <div className="card" key={pic.id}>
      <img
        className="card--image"
        alt={pic.alt_description}
        src={pic.urls.full}
        width="50%"
        height="50%"
      ></img>
    </div>
  ))}{" "}
</div>
</> */
