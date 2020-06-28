/*
 *
 * res = transformArray([[1, 2, 3], [4, 5, 6]])
 * res => [[1, 4], [2, 5], [3, 6]]
 */

const transformArray = (tab) => {
    const subset = tab.flat().map((_) => {
        return tab.map((x) => {
            return x.length > 0 ? [x.shift()] : [];
        });
    }, []);

    return subset.reduce((acc, current) => {
        const s = current.flat();
        if (s.length === 0) {
            return acc;
        }
        return [...acc, s];
    }, []);
};

export { transformArray };
