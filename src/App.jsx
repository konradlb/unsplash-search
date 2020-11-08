import { useState } from "react";
import axios from "axios";
import "./App.css";
import "normalize.css";
import ListItem from "./components/ListItem";

function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [images, setImages] = useState([]);
  const accessKey = "5gOIvztDV9Uwc_UsC7CG3If4ZMTumuEo58gxCUtf48Q";
  const url = "https://api.unsplash.com/search/photos";
  //const url2 = "https://unsplash.com/nautocomplete/";
  //const url2 =
  //("https://cors-anywhere.herokuapp.com/https://unsplash.com/nautocomplete/");

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value === "") {
      setImages([]);
      setNotFound(false);
    }
    // axios
    //   .get(url2 + event.target.value);
    //   .get(url2 + event.target.value, {
    //   params: { client_id: accessKey },
    // })

    // fetch(url2 + event.target.value)
    //   .then((data) => {
    //     setSugestions(data);
    //     console.log(suggestions);
    //   })
    //   .catch((err) => {
    //     console.log("Error happened during fetching suggestions!", err);
    //   });
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
        console.log(images);
        setLoading(false);
        if (data.data.results.length === 0) {
          setNotFound(true);
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
        {isLoading && <h1>loading</h1>}

        <input
          class="searchInput"
          name="photo"
          onChange={handleChange}
          onKeyPress={onKeyUp}
          placeholder="Search for photo"
          type="test"
        ></input>
      </div>
      <div className="card-list">
        {notFound && (
          <div>
            <h3>No images found</h3>
            <img
              alt="No images found"
              src="https://unsplash.com/a/img/empty-states/photos.png"
            />
          </div>
        )}
        {imagesList}
      </div>
    </>
  );
}

export default App;
