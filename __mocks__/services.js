export const cartMock = {
    cart: [
        {
            productId: 6,
            quantity: 3,
        },
        {
            productId: 11,
            quantity: 2,
        },
        {
            productId: 12,
            quantity: 1,
        },
    ],
};

export const categoriesMock = {
    categories: [
        {
            id: 1,
            name: "Fruits",
        },
        {
            id: 2,
            name: "High Tech",
        },
        {
            id: 3,
            name: "Toys",
        },
        {
            id: 4,
            name: "Beverages",
        },
    ],
};

export const productsMock = {
    products: [
        {
            id: 1,
            name: "Apple",
            categoryId: 1,
            price: 0.25,
            discount: 0.4,
        },
        {
            id: 2,
            name: "Banana",
            categoryId: 1,
            price: 0.15,
        },
        {
            id: 3,
            name: "Papaya",
            categoryId: 1,
            price: 0.5,
            discount: 0.2,
        },
        {
            id: 4,
            name: "Lemon",
            categoryId: 1,
            price: 0.2,
            discount: 0.5,
        },
        {
            id: 5,
            name: "Ananas",
            categoryId: 1,
            price: 1.1,
        },
        {
            id: 6,
            name: "Watermelon",
            categoryId: 1,
            price: 0.8,
        },
        {
            id: 7,
            name: "Iphone",
            categoryId: 2,
            price: 819,
        },
        {
            id: 8,
            name: "One Plus",
            categoryId: 2,
            price: 439,
        },
        {
            id: 9,
            name: "IPad",
            categoryId: 2,
            price: 420,
        },
        {
            id: 10,
            name: "IPod",
            categoryId: 2,
            price: 180,
            discount: 0.8,
        },
        {
            id: 11,
            name: "Coffee",
            categoryId: 4,
            price: 5,
            discount: 0.1,
        },
        {
            id: 12,
            name: "Tea",
            categoryId: 4,
            price: 4,
        },
    ],
};

export const fetchCategories = () => {
    return new Promise((resolve, reject) => {
        resolve(categoriesMock);
    });
};
export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(productsMock);
    });
};

export const fetchCart = () => {
    return new Promise((resolve, reject) => {
        resolve(cartMock);
    });
};

export const getCart = () => {
    return new Promise((resolve, reject) => {
        resolve({ message: "Hello world !" });
    });
};
