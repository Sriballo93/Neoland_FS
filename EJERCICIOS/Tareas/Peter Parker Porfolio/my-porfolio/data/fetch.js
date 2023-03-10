
const getCards=  async() => {
    const dataYugi = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=01/01/2000&enddate=08/23/2002&dateregion=tcg_date');
 const json = await dataYugi.json();
 const cards = json.data;
  mapCards(cards);
  console.log(json)
    
  }

  
  const mapCards = (cards) => {
    const mappedCards = cards.map((card) => ({
      name: card.name,
      image: card.card_images[0].image_url,
      race: card.race,
      level:card.level,
      type:card.type,
      atk:card.atk,
      def:card.def,
    }));
 
    printCards(mappedCards);
};