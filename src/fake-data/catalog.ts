export interface ICatalogItem {
  id: number | string;
  name: string;
  src: string;
  price?: string | number;
}

const bookSrc = 'https://images.uzum.uz/cfpjb6vhj8j9g697vd9g/t_product_540_high.jpg#1680513712149';

const books: ICatalogItem[] = [
  {
    id: 'books-1',
    name: 'Biznesni qadamma qadam tizimlashtirish',
    src: bookSrc,
    price: '250 000',
  },

  {
    id: 'books-2',
    name: 'Biznesni qadamma qadam tizimlashtirish',
    src: bookSrc,
    price: '250 000',
  },
  {
    id: 'books-3',
    name: 'Biznesni qadamma qadam tizimlashtirish',
    src: bookSrc,
    price: '250 000',
  },
  {
    id: 'books-4',
    name: 'Biznesni qadamma qadam tizimlashtirish',
    src: bookSrc,
    price: '250 000',
  },

  {
    id: 'books-5',
    name: 'Biznesni qadamma qadam tizimlashtirish',
    src: bookSrc,
    price: '250 000',
  },
];

const fSrc = 'https://images.uzum.uz/cg6435ng49devoaa9np0/t_product_540_high.jpg#1680510864522';

const clothes = [
  {
    id: 'clothes-1',
    name: 'Futbolka',
    src: fSrc,
    price: '85 000',
  },
  {
    id: 'clothes-2',
    name: 'Turkiya Fulbolkalari',
    src: fSrc,
    price: '95 000',
  },
  {
    id: 'clothes-3',
    name: 'Futbolka',
    src: fSrc,
    price: '83 000',
  },
  {
    id: 'clothes-4',
    name: 'Turkiya Fulbolkalari',
    src: fSrc,
    price: '75 000',
  },
  {
    id: 'clothes-5',
    name: 'Turkiya Fulbolkalari',
    src: fSrc,
    price: '125 000',
  },
  {
    id: 'clothes-6',
    name: 'Turkiya Fulbolkalari',
    src: fSrc,
    price: '210 000',
  },
  {
    id: 'clothes-7',
    name: 'Turkiya Fulbolkalari',
    src: fSrc,
    price: '120 000',
  },
  {
    id: 'clothes-8',
    name: 'Turkiya Fulbolkalari',
    src: fSrc,
    price: '99 999',
  },
];

const childPSrc =
  'https://images.uzum.uz/ce9m0ggl08kcldtojc60/t_product_540_high.jpg#1680512964134';

const childrenProducts = [
  {
    id: 'child-1',
    name: 'Tagliklar',
    src: childPSrc,
    price: '12 000',
  },
  {
    id: 'child-2',
    name: 'Tagliklar',
    src: childPSrc,
    price: '15 000',
  },
  {
    id: 'child-3',
    name: 'Tagliklar',
    src: childPSrc,
    price: '9 999',
  },
  {
    id: 'child-4',
    name: 'Tagliklar',
    src: childPSrc,
    price: '10 999',
  },
  {
    id: 'child-5',
    name: 'Tagliklar',
    src: childPSrc,
    price: '14 000',
  },
  {
    id: 'child-6',
    name: 'Tagliklar',
    src: childPSrc,
    price: '13 000',
  },
];

const watchSrc = 'https://images.uzum.uz/cfaedkivtie1lhbhlnqg/t_product_540_high.jpg#1680514524662';

const watches = [
  {
    id: 'watches-1',
    name: 'Smart soat',
    src: watchSrc,
    price: '435 000',
  },
  {
    id: 'watches-2',
    name: 'Smart soat',
    src: watchSrc,
    price: '200 000',
  },
  {
    id: 'watches-3',
    name: 'Smart soat',
    src: watchSrc,
    price: '235 000',
  },
  {
    id: 'watches-4',
    name: 'Smart soat',
    src: watchSrc,
    price: '185 000',
  },
  {
    id: 'watches-5',
    name: 'Smart soat',
    src: watchSrc,
    price: '166 000',
  },
  {
    id: 'watches-6',
    name: 'Smart soat',
    src: watchSrc,
    price: '235 000',
  },
  {
    id: 'watches-7',
    name: 'Smart soat',
    src: watchSrc,
    price: '205 000',
  },
  {
    id: 'watches-8',
    name: 'Smart soat',
    src: watchSrc,
    price: '520 000',
  },
  {
    id: 'watches-9',
    name: 'Smart soat',
    src: watchSrc,
    price: '735 000',
  },
];

interface ICategoryItems {
  [key: string]: any[];
}

export const categoryItems: ICategoryItems = {
  books: books,
  clothes: clothes,
  watches: watches,
  'child-products': childrenProducts,
};
