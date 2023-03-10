
const getCharacters = async () => {
  const res = await fetch(
    "https://hp-api.onrender.com/api/characters"
  );
  const data = await res.json();
  container.innerHTML = "";
  mapCharacters(data.characters);
};

mapCharacters();