import "./Form.css";
import React, { useState, useEffect } from "react";


const Formprueba = () => {
  const [motos, setMotos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [newMoto, setNewMoto] = useState({
    name: "",
    image: "",
    year: "",
    brand: "",
    type: "",
    km: "",
    price: "",
    company: "",
    carnet: "",
    fuel: "",
    cc: "",
    cv: "",
  });
  const [error, setError] = useState(null);
  const [editMoto, setEditMoto] = useState({
    name: "",
    image: "",
    year: "",
    brand: "",
    type: "",
    km: "",
    price: "",
    company: "",
    carnet: "",
    fuel: "",
    cc: "",
    cv: "",
  });

  const getMotos = async () => {
    const res = await fetch(
      "https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos"
    );

    const data = await res.json();
    const filtereddata = await data.filter(
      (moto) => moto.company === "ocasionplus"
    );
    setMotos(data);
    setLoaded(true);
  };

  const createMotos = (ev) => {
    ev.preventDefault();
    if (
      !newMoto.name ||
      !newMoto.image ||
      !newMoto.year ||
      !newMoto.brand ||
      !newMoto.type ||
      !newMoto.company ||
      !newMoto.carnet ||
      !newMoto.fuel ||
      !newMoto.km ||
      !newMoto.cc ||
      !newMoto.cv ||
      !newMoto.price
    ) {
      setError("Faltan datos");
    } else {
      setError(null);
      fetch("https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMoto),
      }).then((res) => {
        getMotos();
      });
    }
  };

  //Delete//
  const deleteMoto = (id) => {
    fetch(`https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      getMotos();
    });
  };

  ///Edit

  const handleEditMoto = (ev, id) => {
    ev.preventDefault();
    fetch(`https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editMoto),
    }).then((res) => {
      getMotos();
    });
  };

  useEffect(() => {
    getMotos();
  }, []);
  return (
    <main>
      <h1>My motos</h1>
      <h3>Motos</h3>
      <div className="motosContainer">
        {loaded ? (
          motos.map((moto) => (
            <div className="artistCard" key={moto.id}>
              <div>
                <h3>{moto.name}</h3>
                <h3>{moto.brand}</h3>
                <h3>{moto.year}</h3>
                <button onClick={() => setEditMoto(moto)}>Edit</button>
                <button onClick={() => deleteMoto(moto.id)}>Delete</button>
              </div>
              <img src={moto.image} alt={moto.name} />
            </div>
          ))
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
      <div className="form-containers">
        <form className="form1" onSubmit={(ev) => createMotos(ev)}>
          <h3>Insert New Moto</h3>
          <input
            type="text"
            placeholder="name"
            onChange={(ev) => setNewMoto({ ...newMoto, name: ev.target.value })}
          />
          <input
            type="text"
            placeholder="brand"
            onChange={(ev) =>
              setNewMoto({ ...newMoto, brand: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="year"
            onChange={(ev) => setNewMoto({ ...newMoto, year: ev.target.value })}
          />
          <select
            onChange={(ev) => setNewMoto({ ...newMoto, type: ev.target.value })}
          >
            <option value="Naked">Naked</option>
            <option value="Custom">Custom</option>
            <option value="Scooter">Scooter</option>
            <option value="Sport">Sport</option>
            <option value="Trial">Trial</option>
            <option value="Supermotard">Supermotard</option>
            <option value="Enduro">Enduro</option>
            <option value="Cross">Cross</option>
            <option value="Infantil">Infantil</option>
          </select>
          <input
            type="text"
            placeholder="km"
            onChange={(ev) => setNewMoto({ ...newMoto, km: ev.target.value })}
          />
          <input
            type="text"
            placeholder="price"
            onChange={(ev) =>
              setNewMoto({ ...newMoto, price: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="company"
            onChange={(ev) =>
              setNewMoto({ ...newMoto, company: ev.target.value })
            }
          />
          {/* <input
            type="text"
            placeholder="carnet"
            onChange={(ev) =>
              setNewMoto({ ...newMoto, carnet: ev.target.value })
            }
          /> */}
          <select
            onChange={(ev) =>
              setNewMoto({ ...newMoto, carnet: ev.target.value })
            }
          >
            <option value="A2">A2</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <select
            onChange={(ev) => setNewMoto({ ...newMoto, fuel: ev.target.value })}
          >
            <option value="Gas">Gas</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
          <input
            type="text"
            placeholder="cc"
            onChange={(ev) => setNewMoto({ ...newMoto, cc: ev.target.value })}
          />
          <input
            type="text"
            placeholder="image"
            onChange={(ev) =>
              setNewMoto({ ...newMoto, image: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="cv"
            onChange={(ev) => setNewMoto({ ...newMoto, cv: ev.target.value })}
          />
          <button
            type="submit"
            onClick={() => {
              console.log("Hola");
            }}
          >
            Create Moto
          </button>
        </form>
        {error && <h3>{error}</h3>}
        <form
          className="form1"
          onSubmit={(ev) => handleEditMoto(ev, editMoto.id)}
        >
          <h3>Edit New Moto</h3>
          <input
            type="text"
            placeholder="name"
            value={editMoto.name}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, name: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="brand"
            value={editMoto.brand}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, brand: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="year"
            value={editMoto.year}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, year: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="image"
            value={editMoto.image}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, image: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="type"
            value={editMoto.type}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, type: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="km"
            value={editMoto.km}
            onChange={(ev) => setEditMoto({ ...editMoto, km: ev.target.value })}
          />
          <input
            type="text"
            placeholder="price"
            value={editMoto.price}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, price: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="company"
            value={editMoto.company}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, company: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="carnet"
            value={editMoto.carnet}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, carnet: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="fuel"
            value={editMoto.fuel}
            onChange={(ev) =>
              setEditMoto({ ...editMoto, fuel: ev.target.value })
            }
          />
          <input
            type="text"
            placeholder="cc"
            value={editMoto.cc}
            onChange={(ev) => setEditMoto({ ...editMoto, cc: ev.target.value })}
          />
          <input
            type="text"
            placeholder="cv"
            value={editMoto.cv}
            onChange={(ev) => setEditMoto({ ...editMoto, cv: ev.target.value })}
          />
          <button type="submit">Edit Moto</button>
        </form>
      </div>
    </main>
  );
};

export default Formprueba;
