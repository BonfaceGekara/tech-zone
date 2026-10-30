
"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
    const {
        items,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
    } = useCart();

    if (items.length === 0) {
        return (
            <main className="mx-auto max-w-5xl px-4 py-16 text-center">
                <div className="text-6xl">🛒</div>

                <h1 className="mt-5 text-3xl font-bold text-gray-900">
                    Your cart is empty
                </h1>

                <p className="mt-3 text-gray-600">
                    Browse our electronics and find something you like.
                </p>

                <Link
                    href="/products"
                    className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Browse Products
                </Link>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Your Shopping Cart
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Review your items before checkout.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm font-semibold text-red-600 hover:text-red-800"
                >
                    Clear Cart
                </button>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
                <section className="space-y-4">
                    {items.map((item) => (
                        <article
                            key={item.id}
                            className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-28 w-full rounded-lg bg-gray-100 object-cover sm:w-32"
                            />

                            <div className="min-w-0 flex-1">
                                <h2 className="font-bold text-gray-900">
                                    {item.name}
                                </h2>

                                <p className="mt-1 text-gray-600">
                                    {formatPrice(item.price)} each
                                </p>

                                <button
                                    type="button"
                                    onClick={() => removeItem(item.id)}
                                    className="mt-2 text-sm font-medium text-red-600 hover:text-red-800"
                                >
                                    Remove
                                </button>
                            </div>

                            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        aria-label={`Decrease ${item.name} quantity`}
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity - 1)
                                        }
                                        className="h-9 w-9 rounded-lg border font-bold hover:bg-gray-100"
                                    >
                                        −
                                    </button>

                                    <span className="min-w-5 text-center font-semibold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        type="button"
                                        aria-label={`Increase ${item.name} quantity`}
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity + 1)
                                        }
                                        className="h-9 w-9 rounded-lg border font-bold hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="font-bold text-gray-900">
                                    {formatPrice(item.price * item.quantity)}
                                </p>
                            </div>
                        </article>
                    ))}
                </section>

                <aside className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <h2 className="text-xl font-bold text-gray-900">
                        Order Summary
                    </h2>

                    <div className="mt-5 flex justify-between gap-4 text-gray-600">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>

                    <div className="mt-3 flex justify-between gap-4 text-gray-600">
                        <span>Delivery</span>
                        <span>Calculated at checkout</span>
                    </div>

                    <div className="my-5 border-t" />

                    <div className="flex justify-between gap-4 text-lg font-bold">
                        <span>Total so far</span>
                        <span>{formatPrice(subtotal)}</span>
                    </div>

                    <p className="mt-4 text-xs leading-5 text-gray-500">
                        Delivery fees will be confirmed during checkout.
                    </p>

                    <Link
                        href="/products"
                        className="mt-6 block rounded-lg border border-blue-600 px-4 py-3 text-center font-semibold text-blue-700 hover:bg-blue-50"
                    >
                        Continue Shopping
                    </Link>
                </aside>
            </div>
        </main>
    );
}
