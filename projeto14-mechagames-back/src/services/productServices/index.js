import mongo from '../../database';

export default async (type, sort = 'asc', limit = 0) => {
    const products = mongo.db('mecha-games').collection('products');
    const sorting = sort === 'desc' ? { value: -1 } : { value: 1 };
    const typing = type ? { type } : {};
    return (
        products
            .find(typing)
            .sort(sorting)
            .limit(limit)
            .toArray()
    );
};
