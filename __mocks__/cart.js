const cart = {
    categories: {
        "0": {
            id: 1,
            name: "Fruits",
            products: [
                {
                    categoryId: 1,
                    discount: 0.4,
                    id: 1,
                    name: "Apple",
                    price: 0.25,
                    quantity: 0,
                },
                {
                    categoryId: 1,
                    id: 2,
                    name: "Banana",
                    price: 0.15,
                    quantity: 0,
                },
                {
                    categoryId: 1,
                    discount: 0.2,
                    id: 3,
                    name: "Papaya",
                    price: 0.5,
                    quantity: 0,
                },
                {
                    categoryId: 1,
                    discount: 0.5,
                    id: 4,
                    name: "Lemon",
                    price: 0.2,
                    quantity: 0,
                },
                {
                    categoryId: 1,
                    id: 5,
                    name: "Ananas",
                    price: 1.1,
                    quantity: 0,
                },
                {
                    categoryId: 1,
                    id: 6,
                    name: "Watermelon",
                    price: 0.8,
                    quantity: 3,
                },
            ],
            total: 2.4,
        },
        "1": {
            id: 2,
            name: "High Tech",
            products: [
                {
                    categoryId: 2,
                    id: 7,
                    name: "Iphone",
                    price: 819,
                    quantity: 0,
                },
                {
                    categoryId: 2,
                    id: 8,
                    name: "One Plus",
                    price: 439,
                    quantity: 0,
                },
                {
                    categoryId: 2,
                    id: 9,
                    name: "IPad",
                    price: 420,
                    quantity: 0,
                },
                {
                    categoryId: 2,
                    discount: 0.8,
                    id: 10,
                    name: "IPod",
                    price: 180,
                    quantity: 0,
                },
            ],
            total: 0,
        },
        "2": {
            id: 3,
            name: "Toys",
            products: [],
            total: 0,
        },
        "3": {
            id: 4,
            name: "Beverages",
            products: [
                {
                    categoryId: 4,
                    discount: 0.1,
                    id: 11,
                    name: "Coffee",
                    price: 5,
                    quantity: 2,
                },
                {
                    categoryId: 4,
                    id: 12,
                    name: "Tea",
                    price: 4,
                    quantity: 1,
                },
            ],
            total: 14,
        },
        total: 16.4,
    },
};

export { cart };
