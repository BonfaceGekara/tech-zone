"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductCatalog() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(products.map((product) => product.category)),
    ];

    const filteredProducts = useMemo(() => {
        const query = search.trim().toLowerCase();

        return products.filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query);

            const matchesCategory =
                category === "All" || product.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [search, category]);

    return (
        <div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search laptops, phones, headphones..."
                    aria-label="Search products"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    aria-label="Filter by category"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item === "All" ? "All categories" : item}
                        </option>
                    ))}
                </select>
            </div>

            <p className="mt-5 text-sm text-slate-500" aria-live="polite">
                {filteredProducts.length} products found
            </p>

            {filteredProducts.length > 0 ? (
                <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="mt-8 rounded-2xl border border-dashed p-10 text-center">
                    <p className="text-lg font-bold">No products found</p>
                    <p className="mt-2 text-slate-500">
                        Try a different search or category.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            setSearch("");
                            setCategory("All");
                        }}
                        className="mt-4 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
}
