document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
});

function loadProducts() {
    const products = [
        { name: 'Apples', price: '$2.00', image: 'apples.jpg' },
        { name: 'Avocados', price: '$1.00', image: 'avocados.jpg' },
        { name: 'Bananas', price: '$1.50', image: 'bananas.jpg' },
        { name: 'Cherries', price: '$2.00', image: 'cherries.jpg' },
        { name: 'Dragon Fruits', price: '$2.20', image: 'dragon-fruit.jpg' },
        { name: 'Grapes', price: '$2.00', image: 'grapes.jpg' },
        { name: 'Lemons', price: '$2.00', image: 'lemon.jpg' },
        { name: 'Limes', price: '$1.50', image: 'LIME.jpg' },
        { name: 'Mangoes', price: '$1.00', image: 'mangoes.jpg' },
        { name: 'Melons', price: '$2.00', image:'watermelon.jpg' },
        { name: 'Orange', price: '$2.50', image: 'oranges.jpg' },
        { name: 'Papayas', price: '$1.00', image: 'papaya.jpg' },
        { name: 'Passiflora Edulis', price: '$1.00', image: 'passiflora edulis.png' },
        { name: 'Pears', price: '$2.00', image: 'pears.jpg' },
        { name: 'Pineapples', price: '$2.00', image: 'pineapples.jpg' },
        { name: 'Pomegranate', price: '$2.50', image: 'pomegranate.jpg' },
        { name: 'Red Plums', price: '$1.50', image: 'red plums.jpg' },
        { name: 'Strawberries', price: '$2.50', image:'strawberries.jpg' },
        { name: 'Tangerines', price: '$2.00', image: 'tangerines.jpg' },
        {name: 'VEGETABLES'},
        { name: 'Beetroot', price: '$2.00', image: 'beetroot.jpg' },
        { name: 'Broccoli', price: '$2.00', image: 'broccoli.jpg' },
        { name: 'Cabbage', price: '$1.00', image: 'cabbages.jpg' },
        { name: 'Carrot', price: '$1.00', image: 'carrots.jpg' },
        { name: 'Corn', price: '$1.00', image: 'corn.jpg' },
        { name: 'Corriander', price: '$0.50', image: 'corriander.png' },
        { name: 'Courgette', price: '$1.00', image: 'courgette.jpg' },
        { name: 'Cucumber', price: '$1.50', image: 'cucumber.jpg' },
        { name: 'Eggplant', price: '$2.00', image: 'egg plant.png' },
        { name: 'French beans', price: '$2.00', image: 'french beans.png' },
        { name: 'Garlic', price: '$0.50', image: 'garlic.jpg' },
        { name: 'Ginger', price: '$1.00', image: 'ginger.jpg' },
        { name: 'Lettuce', price: '$1.00', image: 'lettuce.jpg' },
        { name: 'Peas', price: '$2.00', image: 'peas.jpg' },
        { name: 'Pepper bells', price: '$1.00', image: 'pepper bells.jpg' },
        { name: 'Potatoes', price: '$2.50', image:'potato.jpg' },
        { name: 'Pumpkin', price: '$2.00', image: 'pumpkin.jpg' },
        { name: 'Red Onions', price: '$2.00', image: 'red onion.jpg' },
        { name: 'Spinach', price: '$1.00', image:'spinach.jpg' },
        { name: 'Sweet potatoes', price: '$2.00', image: 'sweet potatos.png' },
        { name: 'Spring onions', price: '$2.00', image: 'spring-onions.jpg' },
        { name: 'Tomatoes', price: '$2.00', image: 'tomato.jpg' },








    ];

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100" height="100">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

