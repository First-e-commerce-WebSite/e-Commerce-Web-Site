import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'saif',
            email: "admin@example.com",
            password: bcrypt.hashSync("123456"),
            isAdmin: true,
        },
        {
            name: 'saif',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            // _id:'1',
            name: 'Nike air white',
            slug: 'nike-air',
            category: 'Shoes',
            image: '/images/p1.png',
            price: 290,
            countInStock: 0,
            brand: 'Nike',
            rating: 5,
            numReviews: 11,
            description: "high quality shoes"
        },
        {
            // _id:'2',
            name: 'Nike air red',
            slug: 'nike-air-red',
            category: 'Shoes',
            image: '/images/p2.png',
            price: 340,
            countInStock: 3,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: "high quality shoes"
        },
        {
            // _id:'3',
            name: 'Super-Star',
            slug: 'adidas',
            category: 'Shoes',
            image: '/images/p3.png',
            price: 260,
            countInStock: 0,
            brand: 'adidas',
            rating: 4.5,
            numReviews: 10,
            description: "high quality shoes"
        },
        {
            // _id:'4',
            name: 'New Balance',
            slug: 'new-balance',
            category: 'Shoes',
            image: '/images/p4.png',
            price: 247,
            countInStock: 15,
            brand: 'New balance',
            rating: 3.5,
            numReviews: 14,
            description: "high quality shoes"
        },
        {
            // _id:'5',
            name: 'Nike air blue',
            slug: 'nike-air-blue',
            category: 'Shoes',
            image: '/images/p5.png',
            price: 290,
            countInStock: 4,
            brand: 'Nike',
            rating: 5,
            numReviews: 18,
            description: "high quality shoes"
        },
        {
            // _id:'6',
            name: 'New Balance brown',
            slug: 'New-Balance-Brown',
            category: 'Shoes',
            image: '/images/p6.png',
            price: 247,
            countInStock: 6,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 9,
            description: "high quality shoes"
        },
        {
            // _id:'1',
            name: 'Nike air Jordan',
            slug: 'nike-air-Jordan',
            category: 'Shoes',
            image: '/images/p7.png',
            price: 290,
            countInStock: 2,
            brand: 'Nike',
            rating: 5,
            numReviews: 20,
            description: "high quality shoes"
        },
    ]
}

export default data 