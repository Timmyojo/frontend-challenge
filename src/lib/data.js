const navList = [
    {
        id: "1",
        icon: "assets/Frame 12g.svg",
        url: "/"
    },
    {
        id: "2",
        icon: "assets/Frame 12.svg",
        url: "/dashboard"
    },
    {
        id: "3",
        icon: "assets/Icon.svg",
        url: "/dashboard"
    },
    {
        id: "4",
        icon: "assets/Frame 12a.svg",
        url: "/dashboard"
    },
    {
        id: "5",
        icon: "assets/Frame 12b.svg",
        url: "/dashboard"
    },
    {
        id: "6",
        icon: "assets/Frame 12c.svg",
        url: "/dashboard"
    },

];

const orders = [
    {
        id: 1111, 
        icon: "assets/user1.svg",
        name: "Marcus Bergson", 
        email: "Tim@mail.com", 
        amount: "22,500",
        status: "paid",
        date: "Dec 21, 2023",
    },
    {
        id: 2222, 
        icon: "assets/user2.svg",
        name: "Jaydon Vaccaro", 
        email: "Tim@mail.com", 
        amount: "100,000",
        status: "refund",
        date: "Dec 21, 2023",
    },
    {
        id: 3333, 
        icon: "assets/user3.svg",
        name: "Corey Schleifer", 
        email: "Tim@mail.com", 
        amount: "40,000",
        status: "paid",
        date: "Dec 21, 2023",
    },
    {
        id: 4444, 
        icon: "assets/user4.svg",
        name: "Cooper Press", 
        email: "Tim@mail.com", 
        amount: "25,000",
        status: "refund",
        date: "Dec 21, 2023",
    },
    {
        id: 5555, 
        icon: "assets/user5.svg",
        name: "Philip Lubin", 
        email: "Tim@mail.com", 
        amount: "20,000",
        status: "paid",
        date: "Dec 21, 2023",
    },
];

const items = [
    {
        id: 1,
        title:  "total order",
        icon: "assets/box-tick.svg",
        change: "23.5",
        value: "350",
        gain: true,
    },
    {
        id: 2,
        title:  "total refund",
        icon: "assets/3d-rotate.svg",
        change: "270",
        value: "350",
        gain: false,
    },
    {
        id: 1,
        title:  "average sales",
        icon: "assets/shopping-cart.svg",
        change: "23.5",
        value: "1567",
        gain: false,
    },
    {
        id: 1,
        title:  "total income",
        icon: "assets/coin.svg",
        change: "23.5",
        value: "350,000",
        gain: true,
    },
];

const platforms = [
    {
        id: 1,
        name: "Book Bazar",
        amount: "2,500,000",
        change: "15",
        color: "purple"
    },
    {
        id: 2,
        name: "Artisan Aisle",
        amount: "2,500,000",
        change: "10",
        color: "blue"
    },
    {
        id: 3,
        name: "Toy Troop",
        amount: "1,200,000",
        change: "8",
        color: "orange"
    },
    {
        id: 4,
        name: "XStore",
        amount: "1,300,000",
        change: "8",
        color: "red"
    },
];

export {navList, orders, platforms, items};