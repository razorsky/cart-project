import { transformArray } from "./vendor";
import { getCart } from "./cart";

getCart().then(console.log);

const res = transformArray([
    [1, 2, 3],
    [4, 5, 6],
]);
console.log(res);
