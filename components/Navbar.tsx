
"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { itemCount } = useCart();

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tight"
                    onClick={() => setMenuOpen(false)}
                >
                    Tech<span className="text-blue-600">Zone</span>
                </Link>

                <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>

                    <Link href="/products" className="hover:text-blue-600">
                        Products
                    </Link>
                    <Link
                        href="/cart"
                        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                    >
                        Cart ({itemCount})
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="/products"
                        className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                        Shop Now
                    </Link>

                    <button
                        type="button"
                        className="rounded-lg border px-3 py-2 text-sm font-semibold md:hidden"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="border-t bg-white px-5 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4 font-medium">
                        <Link href="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>

                        <Link href="/products" onClick={() => setMenuOpen(false)}>
                            Products
                        </Link>
                        <Link
                            href="/cart"
                            className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setMenuOpen(false)}
                        >
                            Cart ({itemCount})
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
