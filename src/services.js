const BASE_URL =
    "https://wt-88ed533d03ba6afba8c24a8590aa01b7-0.sandbox.auth0-extend.com/frontend-test";

export const fetchProducts = () => {
    return fetch(`${BASE_URL}/products`).then((response) => response.json());
};

export const fetchCategories = () => {
    return fetch(`${BASE_URL}/categories`).then((response) => response.json());
};

export const fetchCart = () => {
    return fetch(`${BASE_URL}/cart`).then((response) => response.json());
};
