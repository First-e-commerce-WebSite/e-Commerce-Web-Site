import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'saif',
            email: "adminsaif@example.com",
            password: bcrypt.hashSync("123456"),
            isAdmin: true,
        },
        {
            name: 'seif',
            email: 'userseif@example.com',
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
    ]
}

export default data 