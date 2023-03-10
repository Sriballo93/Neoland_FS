import "./Form.css";
import React, { useState, useEffect } from "react";

const Form = () => {
  const [artists, setArtists] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [newArtist, setNewArtist] = useState({
    artist: "",
    bestsong: "",
    year: "",
    imgUrl: "",
  });
  const [error, setError] = useState(null);

  const getArtists = async () => {
    const res = await fetch("https://63f37625de3a0b242b427767.mockapi.io/cds");
    const data = await res.json();
    setArtists(data);
    setLoaded(true);
  };

  useEffect(() => {
    getArtists();
  }, []);
  return (
    <main>
      <h1>My Discograhy</h1>
      <h3>Fav Artists</h3>
      <div className="artistContainer">
        {loaded ? (
          artists.map((artist) => (
            <div className="artistCard" key={artist.id}>
              <div>
                <h3>{artist.artist}</h3>
                <h3>{artist.bestSong}</h3>
                <h3>{artist.year}</h3>
              </div>
              <img src={artist.imgUrl} alt={artist.name} />
            </div>
          ))
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
      <div className="form-containers">
        <form className="form1">
          <h3>Insert New Album</h3>
          <input type="" placeholder="artist" />
          <input type="" placeholder="bestsong" />
          <input type="" placeholder="year" />
          <input type="" placeholder="imgUrl" />
          <button type="submit">Create Artist</button>
        </form>
        <form className="form1">
          <h3>Edit New Album</h3>
          <input type="" placeholder="artist" />
          <input type="" placeholder="bestsong" />
          <input type="" placeholder="year" />
          <input type="" placeholder="imgUrl" />
          <button type="submit">Edit Artist</button>
        </form>
      </div>
    </main>
  );
};

export default Form;
