import "./Form.css";
import React, { useState, useEffect } from "react";

const Form2 = () => {
  const [artists, setArtists] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [newArtist, setNewArtist] = useState({
    artist: "",
    bestSong: "",
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

  const createArtist = (ev) => {
    ev.preventDefault();
    if (
      !newArtist.artist ||
      !newArtist.bestSong ||
      !newArtist.year ||
      !newArtist.imgUrl
    ) {
      setError("Formulario incompleto");
    } else {
      setError(null);
      fetch("https://63f37625de3a0b242b427767.mockapi.io/cds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArtist),
      }).then((res) => {
        getArtists();
      });
    }
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
        <form className="form1" onSubmit={(ev) => createArtist(ev)}>
          <h3>Insert New Artist</h3>
          <input
            type="text"
            placeholder="artist"
            onChange={(ev) =>
              setNewArtist({ ...newArtist, artist: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="bestsong"
            onChange={(ev) =>
              setNewArtist({ ...newArtist, bestSong: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="year"
            onChange={(ev) =>
              setNewArtist({ ...newArtist, year: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="imgUrl"
            onChange={(ev) =>
              setNewArtist({ ...newArtist, imgUrl: ev.target.value })
            }
          />
          <button
            type="submit"
            onClick={() => {
              console.log("Hola");
            }}
          >
            Create Artist
          </button>
        </form>
        {error && <h3>{error}</h3>}
        <form className="form1">
          <h3>Edit New Artist</h3>
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

export default Form2;
