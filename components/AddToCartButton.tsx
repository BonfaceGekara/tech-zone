
"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from '@/components/CartProvider';

type AddToCartButtonProps = {
    product: Product;
};

export default function AddToCartButton({
    product,
}: AddToCartButtonProps) {
    const { addItem } = useCart();
    const [added, setAdded] = useState(false);

    function handleAddToCart() {
        addItem(product);
        setAdded(true);

        window.setTimeout(() => {
            setAdded(false);
        }, 1200);
    }

    return (
        <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
            {added ? "Added ✓" : "Add to Cart"}
        </button>
    );
}
