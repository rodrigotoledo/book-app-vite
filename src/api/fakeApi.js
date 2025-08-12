// Mock user database
import { faker } from "@faker-js/faker";
const users = [
  { id: 1, email: 'faker@test.com', password: 'faker@test.com' }
];

// Mock books database
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
];


export const fakeAuth = {
  login(email, password) {
    return new Promise((resolve, reject) => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        setTimeout(() => resolve({ success: true, userId: user.id }), 500);
      } else {
        setTimeout(() => reject({ success: false, message: 'Invalid credentials' }), 500);
      }
    });
  },
  signup(email, password) {
    return new Promise((resolve) => {
      const newUser = { id: users.length + 1, email, password };
      users.push(newUser);
      setTimeout(() => resolve({ success: true, userId: newUser.id }), 500);
    });
  }
};

export function getFakeBooks(qty = 20) {
  return Array.from({ length: qty }).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    genre: faker.music.genre(),
    publishedYear: faker.date.past({ years: 50 }).getFullYear(),
    cover: faker.image.urlLoremFlickr({ category: "books" }),
    description: faker.lorem.paragraph(),
  }));
}
export const fakeBookApi = {
  getBooks(qty = 20) {
    const books = getFakeBooks(qty);
    return new Promise((resolve) => {
      setTimeout(() => resolve(books), 500);
    });
  },
};