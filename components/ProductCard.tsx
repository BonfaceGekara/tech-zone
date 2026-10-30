
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
            <Link
                href={`/products/${product.id}`}
                aria-label={`View ${product.name}`}
                className="block overflow-hidden bg-slate-100"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </Link>

            <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {product.category}
                    </span>

                    <span className="text-xs text-slate-500">
                        {product.stock > 0 ? "In stock" : "Sold out"}
                    </span>
                </div>

                <h2 className="mt-3 text-lg font-bold text-slate-900">
                    <Link
                        href={`/products/${product.id}`}
                        className="transition hover:text-blue-600"
                    >
                        {product.name}
                    </Link>
                </h2>

                <p className="mt-3 text-xl font-black">
                    {formatPrice(product.price)}
                </p>

                <Link
                    href={`/products/${product.id}`}
                    className="mt-5 block rounded-xl bg-slate-950 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
                >
                    View Details
                </Link>

                <AddToCartButton product={product} />
            </div>
        </article>
    );
}
