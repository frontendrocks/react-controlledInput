import img1 from './assets/images/book-1.jpg';
import img2 from './assets/images/book-2.jpg';
import img3 from './assets/images/book-3.jpg';

export const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: img1,
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: img2,
    id: 2,
  },
  {
    author: 'Stephen King',
    title: 'Fairy Tale',
    img: img3,
    id: 3,
  },
];

export const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
];

export const people = [
  { id: 1, name: 'bob', nickName: 'Stud Muffin' },
  { id: 2, name: 'peter' },
  {
    id: 3,
    name: 'oliver',
    images: [
      {
        small: {
          url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg',
        },
      },
    ],
  },
  { id: 4, name: 'david' },
];