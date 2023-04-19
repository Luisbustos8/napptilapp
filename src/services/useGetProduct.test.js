import { getProducts, fetchFromlocalStorage } from './useGetProducts';

describe('getProducts', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.mockRestore();
  });

  it('fetches data from API and stores it in local storage', async () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const response = { ok: true, json: () => Promise.resolve(products) };
    window.fetch.mockResolvedValueOnce(response);

    const data = await getProducts();

    expect(data).toEqual(products);
    expect(localStorage.getItem('products')).not.toBeNull();
  });

});

describe('fetchFromlocalStorage', () => {
  it('returns undefined if there is no data in local storage', () => {
    localStorage.clear();

    const data = fetchFromlocalStorage();

    expect(data).toBeUndefined();
  });

  it('returns the data from local storage if it has not expired', () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const dataWithExpiration = { data: products, expiration: Date.now() + 1000 * 60 * 60 };
    localStorage.setItem('products', JSON.stringify(dataWithExpiration));

    const data = fetchFromlocalStorage();

    expect(data).toEqual(products);
  });

  it('removes the data from local storage if it has expired and returns undefined', () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const dataWithExpiration = { data: products, expiration: Date.now() - 1000 * 60 * 60 };
    localStorage.setItem('products', JSON.stringify(dataWithExpiration));

    const data = fetchFromlocalStorage();

    expect(data).toBeUndefined();
    expect(localStorage.getItem('products')).toBeNull();
  });
});
