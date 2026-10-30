
export type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    icon: string;
    image: string;
    description: string;
    stock: number;
};

export const products: Product[] = [
    {
        id: "1",
        name: "UltraBook Pro 15",
        category: "Laptops",
        price: 89999,
        icon: "💻",
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
        description:
            "A powerful laptop for work, study, and everyday productivity.",
        stock: 12,
    },
    {
        id: "2",
        name: "Galaxy Smartphone",
        category: "Smartphones",
        price: 45999,
        icon: "📱",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
        description:
            "A modern smartphone for communication, photography, and entertainment.",
        stock: 20,
    },
    {
        id: "3",
        name: "Wireless Headphones",
        category: "Audio",
        price: 6499,
        icon: "🎧",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
        description:
            "Enjoy your favourite music with convenient wireless headphones.",
        stock: 30,
    },
    {
        id: "4",
        name: "4K Smart Television",
        category: "Televisions",
        price: 62999,
        icon: "📺",
        image:
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
        description:
            "Bring movies and entertainment to life on a 4K smart television.",
        stock: 8,
    },
    {
        id: "5",
        name: "Wireless Keyboard",
        category: "Accessories",
        price: 2500,
        icon: "⌨️",
        image:
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
        description:
            "A comfortable keyboard for work, study, and everyday computing.",
        stock: 25,
    },
];

export function formatPrice(price: number) {
    return `KSh ${price.toLocaleString("en-KE")}`;
}
