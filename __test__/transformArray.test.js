import { transformArray } from "../src/vendor";

test("transformArray [[1, 2, 3], [4, 5, 6]]", () => {
    const res = transformArray([
        [1, 2, 3],
        [4, 5, 6],
    ]);
    expect(res).toEqual([
        [1, 4],
        [2, 5],
        [3, 6],
    ]);
});
