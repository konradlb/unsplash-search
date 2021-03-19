import { useState } from "react";
import axios from "axios";

import ImagesList from "./components/Images/ImagesList";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import NotFound from "./components/NotFound/NotFound";

import "./css/App.css";
import "normalize.css";

function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [images, setImages] = useState([]);
  const accessKey = process.env.REACT_APP_ACCES_KEY;
  const url = "https://api.unsplash.com/search/photos";
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value === "") {
      setImages([]);
      setNotFound(false);
    }
  };

  const handleClick = () => {
    setLoading(true);
    axios
      .get(url, {
        params: { query: query, page: 1, per_page: 24 },
        headers: {
          Authorization: "Client-ID " + accessKey,
        },
      })
      .then((data) => {
        setImages(data.data.results);
        setLoading(false);
        setCurrentlyDisplayed(query);
        if (data.data.results.length === 0) {
          setNotFound(true);
          setCurrentlyDisplayed("");
        } else setNotFound(false);
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  };

  const onKeyUp = (e) => {
    if (query !== "" && e.charCode === 13) {
      handleClick();
    }
  };
  return (
    <>
      <div className="app">
        <div className="header">
          <h1>Unsplash photo search</h1>
          <input
            className="searchInput"
            name="photo"
            onChange={handleChange}
            onKeyPress={onKeyUp}
            placeholder="Search for photo"
            type="test"
          />
          <div className="message">
            {images.length > 0 && !isLoading && <h2>{currentlyDisplayed}</h2>}
            {notFound && !isLoading && <NotFound />}
            {isLoading && <LoadingSpinner />}
          </div>
        </div>

        <div className="card-list">
          <ImagesList images={images} />
        </div>
      </div>
    </>
  );
}

export default App;
