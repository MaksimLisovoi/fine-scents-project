import products from './products.js';

const bestsellerList = document.querySelector('.bestseller-cards__block');
const bestsellerCardMarkup = createProductCard(products);

bestsellerList.insertAdjacentHTML('beforeend', bestsellerCardMarkup);

function createProductCard(products) {
  return products
    .map(({ type, price, name, url, urlDesktop, btn }) => {
      return `  <li class="bestseller__card">
    <div class="bestseller__picture-block">
      <picture>
        <source
          srcset="${urlDesktop} 1x"
          media="(min-width:800px)"
        />

        <source media="(max-width: 600px)" srcset="${url}" />
        <img class="bestseller__img" src="${url}" alt="" />
      </picture>
    </div>
    <div class="bestseller__price-block">
      <div>
        <h3 class="bestseller__price-block--title">${type}</h3>
        <span class="bestseller__price-block--name">${name}</span>
      </div>
      <span class="bestseller__price-block--title">${price}</span>
    </div>

    <button class="button">${btn}</button>
  </li>`;
    })
    .join('');
}
console.log(createProductCard);
