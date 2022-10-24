import products from '../products.js';

const livingroomList = document.querySelector('.livingroom-cards__block');
const bathroomList = document.querySelector('.bathroom-cards__block');
const wardrobeList = document.querySelector('.wardrobe-cards__block');

const livingroomCardMarkup = createProductCard(products, 'LIVINGROOM');
const bathroomCardMarkup = createProductCard(products, 'BATHROOM');
const wardrobeCardMarkup = createProductCard(products, 'WARDROBE');

livingroomList.insertAdjacentHTML('beforeend', livingroomCardMarkup);
bathroomList.insertAdjacentHTML('beforeend', bathroomCardMarkup);
wardrobeList.insertAdjacentHTML('beforeend', wardrobeCardMarkup);

function createProductCard(products, prodCategory) {
  return products
    .map(({ type, price, name, url, urlDesktop, btn, category }) => {
      if (category === prodCategory) {
        return `  <li class="bestseller__card swiper-slide">
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
      }
    })
    .join('');
}
console.log(createProductCard);
