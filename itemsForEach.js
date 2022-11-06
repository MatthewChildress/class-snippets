import { lists } from '../objects/objectsList.js'

export default function itemsForEach() {
    // iterates over each object in array
    lists.forEach((list) => {
        const cards = document.getElementById('cards');

        // creates parent & child elements for item cards
        let listCard = document.createElement('div');
        let listName = document.createElement('p');
        let listPrice = document.createElement('p');
        let listImage = document.createElement('div');

        // attches elements to correct part of DOM
        cards.appendChild(listCard);
        listCard.appendChild(listName);
        listCard.appendChild(listPrice);
        listCard.appendChild(listImage);

        // assigns class names, IDs, and text for element
        listCard.className = `card ${list.category}`;
        listName.className = 'card-name';
        listPrice.className = 'card-price';
        listImage.className = 'card-image';
        listCard.id = list.id;
        listName.textContent = list.name;
        listPrice.textContent = list.price;
        listImage.textContent = list.image;
    })
}