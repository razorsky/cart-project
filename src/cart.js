import { fetchProducts, fetchCategories, fetchCart } from "./services";

const mapProductsToCategories = ({ categories, products, cart }) => {
    const result = categories.map((category) => {
        const productsfiltered = products.filter(
            (product) => product.categoryId === category.id
        );

        const prod = productsfiltered.map((p) => {
            const [{ quantity } = { quantity: 0 }] = cart.filter(
                (c) => c.productId === p.id
            );
            return {
                ...p,
                quantity,
            };
        });

        const totalByProduct = prod.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity;
        }, 0);

        return {
            ...category,
            products: prod,
            total: parseFloat(parseFloat(totalByProduct).toFixed(3)),
        };
    });

    const totalByCategories = result.reduce((acc, curr) => {
        return acc + curr.total;
    }, 0);

    return {
        ...result,
        total: totalByCategories,
    };
};

export const getCart = () => {
    return Promise.all([fetchProducts(), fetchCategories(), fetchCart()]).then(
        (response) => {
            const [{ products }, { categories }, { cart }] = response;
            return {
                categories: mapProductsToCategories({
                    categories,
                    products,
                    cart,
                }),
            };
        }
    );
};
