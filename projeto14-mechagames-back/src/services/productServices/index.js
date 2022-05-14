import mongo from '../../';

export const findProducts = async (type, sort="asc", limit=0) => {

    const products = mongo.db("mecha-games").collection("products");
    const sorting = sort === 'desc'? {value: -1}: {value: 1};
    const typing = type?{type}:{};
    return (
        await products
        .find(typing)
        .sort(sorting)
        .limit(limit)
        .toArray()
    );
}