const mockServices = require("../__mocks__/services");
const Cart = require("../src/cart");
const mockCart = require("../__mocks__/cart");

jest.mock("./../src/services", () => ({
    fetchCategories: () => Promise.resolve(mockServices.categoriesMock),
    fetchProducts: () => Promise.resolve(mockServices.productsMock),
    fetchCart: () => Promise.resolve(mockServices.cartMock),
}));

test("getCart", () => {
    return Cart.getCart().then((cart) => {
        expect(cart).toMatchObject(mockCart.cart);
    });
});
