import { markCurrentScopeAsDynamic } from "next/dist/server/app-render/dynamic-rendering";

interface StaticProducts {
    name: string;
    imgUrl: string;
    alt: string;
}

interface Products {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    oldPrice?: number;
    discountOffer?: string;
    article?: string;
}
 
export const homePageProductData:Products[] = [
    {
        imageUrl: "/images/products/image1.svg",
        name: "Syltherine",
        description: "Stylish Cafe Chair",
        price: 2500,
        article: 'New'
        
    },
    {
        imageUrl: "/images/products/image2.svg",
        name: "Leviosa",
        description: "Indoor lounge chair",
        price: 3000,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image3.svg",
        name: "Lolito",
        description: "Luxury big sofa",
        price: 1200,
        article: 'New'
    },
    {
        imageUrl: "/images/products/image4.svg",
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: 1500,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image5.svg",
        name: "Grifo",
        description: "Night Lamp",
        price: 2000,
        article: 'New'
    },
    {
        imageUrl: "/images/products/image6.svg",
        name: "Muggo",
        description: "Small mug",
        price: 1000,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image7.svg",
        name: "Pingky",
        description: "Cute bed set",
        price: 7000,
        article: 'New'
    },
    {
        imageUrl: "/images/products/image8.svg",
        name: "Potty",
        description: "Minimalist flower pot",
        price: 1100,
        discountOffer: "-30%",
    }
]

export const shopPageProductData:Products[] = [
    {
        imageUrl: "/images/products/image1.svg",
        name: "Syltherine",
        description: "Stylish Cafe Chair",
        price: 2500,
        oldPrice: 3500        
    },
    {
        imageUrl: "/images/products/image2.svg",
        name: "Leviosa",
        description: "Indoor lounge chair",
        price: 3000,
        oldPrice: 3500,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image3.svg",
        name: "Lolito",
        description: "Luxury big sofa",
        price: 1200,
        oldPrice: 1500
    },
    {
        imageUrl: "/images/products/image4.svg",
        name: "Respira",
        description: "Outdoor bar table and stool",
        price: 1500,
        oldPrice: 2000,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image5.svg",
        name: "Grifo",
        description: "Night Lamp",
        price: 2000,
        oldPrice: 2500,
    },
    {
        imageUrl: "/images/products/image6.svg",
        name: "Muggo",
        description: "Small mug",
        price: 1000,
        oldPrice: 2000,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image7.svg",
        name: "Pingky",
        description: "Cute bed set",
        price: 7000,
        oldPrice: 7500,
    },
    {
        imageUrl: "/images/products/image8.svg",
        name: "Potty",
        description: "Minimalist flower pot",
        price: 1100,
        oldPrice: 1600,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image6.svg",
        name: "Muggo",
        description: "Small mug",
        price: 1000,
        oldPrice: 2000,
        discountOffer: "-30%",
    },
    {
        imageUrl: "/images/products/image7.svg",
        name: "Pingky",
        description: "Cute bed set",
        price: 7000,
        oldPrice: 7500,
    },
    {
        imageUrl: "/images/products/image8.svg",
        name: "Potty",
        description: "Minimalist flower pot",
        price: 1100,
        oldPrice: 1600,
        discountOffer: "-30%",
    }
]

export const staticProducts:StaticProducts[] = [

    {name: 'Dining', imgUrl: '/images/static-cards/living-room.svg', alt:'Dining Room Furniture'},
    {name: 'Living', imgUrl: '/images/static-cards/Mask-Group.svg', alt:'Living Room Furniture'},
    {name: 'Bedroom', imgUrl: '/images/static-cards/Mask-Group(1).svg', alt:'Bedroom Room Furniture'},
]

export const currency = "Rs.";