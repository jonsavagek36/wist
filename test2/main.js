

// onClick -> Get new deck and shuffle it.
  let button = document.getElementById("start-button");
    button.addEventListener('click', (event) => {
      fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => {
          if(response.ok) {
            return response;
          } else {
            let errMsg = "Deck not retrieved";
            error = new Error(errMsg);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(deck => {
          console.log(deck);
        })
    })


let drawHand = (gameDeck) => {
// Draw player hand (13 cards out of the deck).
  fetch(`https://deckofcardsapi.com/api/deck/${gameDeck.id}/draw/?count=13`)
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errMsg = 'Cards not drawn';
        error = new Error(errMsg);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(hand => {
      console.log(hand);
    })
}
