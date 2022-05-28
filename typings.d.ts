export interface Post{
    _id: string;
    _createAt: string;
    title: string;
    author: {
        name: string,
        image: string
    };
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    alug: {
        current: string;
    };
    body: [object];
}

export interface Category{
    _id: string;
    title: string;
}