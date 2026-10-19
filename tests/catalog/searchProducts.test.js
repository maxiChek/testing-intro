const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(
      searchProducts(products, 'Наушники').map((product) => product.id)
    ).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(
      searchProducts(products, 'Чистый код').map((product) => product.id)
    ).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(
      searchProducts(products, 'Настольная лампа').map((product) => product.id)
    ).toEqual([4]);
  });
  test.todo("'javascript' возвращает товар с ID 3");
  test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test.todo("'наушники' возвращает товар с ID 1");
  test.todo('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]');
  test.todo('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]');
  test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
});
