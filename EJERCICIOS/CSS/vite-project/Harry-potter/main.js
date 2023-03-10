import './style.css'

const charapters  = 
[
  {
    name: "Harry Potter",
    house: "Gryffindor",
    ancestry: "half-blood",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/harry.jpg"
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    ancestry: "muggleborn",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/hermione.jpeg"
  },
  {
    name: "Ron Weasley",
    house: "Gryffindor",
    ancestry: "pure-blood",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/ron.jpg"
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    ancestry: "pure-blood",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/draco.jpg"
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
    ancestry: "",
    alive: false,
    image: "https://ik.imagekit.io/hpapi/cedric.png"
  },
  {
    name: "Cho Chang",
    house: "Ravenclaw",
    ancestry: "Unknow",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/cho.jpg"
  },
  {
    name: "Neville Longbottom",
    house: "Gryffindor",
    ancestry: "pure-blood",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/neville.jpg"
  },
  {
    name: "Luna Lovegood",
    house: "Ravenclaw",
    ancestry: "Unknow",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/luna.jpg"
  },
  {
    name: "Ginny Weasley",
    house: "Gryffindor",
    ancestry: "pure-blood",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/ginny.jpg"
  },
  {
    name: "Vincent Crabbe",
    house: "Slytherin",
    ancestry: "pure-blood",
    alive: false,
    image: "https://ik.imagekit.io/hpapi/crabbe.jpg"
  },
  {
    name: "Gregory Goyle",
    house: "Slytherin",
    ancestry: "pure-blood",
    alive: true,
    image: "https://ik.imagekit.io/hpapi/goyle.jpg"
  },]



const printProducts = (items) => {
  const container = document.querySelector("#app");
  for (const item of items) {
    container.innerHTML += `
    <figure>
    <img src=${item.image} alt=${item.name} />
    <h2>${item.name}</h3>
    <h4>${item.house}</h4>
    <h4>${item.ancestry}</h4>
    <h4>${item.alive}</h4>
    </figure>`;
  }
};

printProducts(charapters);
