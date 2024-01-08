import { products } from '@wix/stores';
import { faker } from '@faker-js/faker';
import { GetProductResponseNonNullableFields } from '@wix/stores/build/cjs/src/stores-catalog-v1-product.universal';

export function createProducts(numOfItems?: number) {
    return Array.from(new Array(numOfItems || 10)).map(createProduct);
}

export function createProduct(
    id?: string
): products.Product & GetProductResponseNonNullableFields['product'] {
    return {
        _id: id ?? faker.string.uuid(),
        slug: faker.lorem.word(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        media: {
            items: [
                {
                    image: {
                        url: faker.image.urlLoremFlickr({
                            category: 'product',
                            height: 241,
                            width: 241,
                        }),
                    },
                    title: faker.lorem.word(),
                },
                {
                    image: {
                        url: faker.image.urlLoremFlickr({
                            category: 'product',
                            height: 241,
                            width: 241,
                        }),
                    },
                    title: faker.lorem.word(),
                },
            ],
        },
        price: {
            formatted: {
                price: faker.commerce.price({
                    symbol: '$',
                }),
            },
        },
    } as products.Product & GetProductResponseNonNullableFields['product'];
}
