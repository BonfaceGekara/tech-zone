
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, products } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

type ProductPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { id } = await params;

    const product = products.find((item) => item.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main className="mx-auto min-h-screen max-w-7xl px-5 py-12">
            <Link
                href="/products"
                className="font-medium text-blue-600 hover:underline"
            >
                ← Back to products
            </Link>

            <div className="mt-8 grid gap-10 md:grid-cols-2">

                <div className="overflow-hidden rounded-3xl bg-white">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-80 w-full object-cover sm:h-120"
                    />
                </div>


                <div className="py-4">
                    <p className="font-semibold uppercase tracking-widest text-blue-600">
                        {product.category}
                    </p>

                    <h1 className="mt-3 text-4xl font-black">
                        {product.name}
                    </h1>

                    <p className="mt-5 text-3xl font-black">
                        {formatPrice(product.price)}
                    </p>

                    <p className="mt-6 leading-7 text-slate-600">
                        {product.description}
                    </p>

                    <p className="mt-5 text-sm text-slate-600">
                        {product.stock > 0
                            ? `${product.stock} items in stock`
                            : "Out of stock"}
                    </p>

                    {product.stock > 0 && (
                        <AddToCartButton product={product} />
                    )}
                </div>
            </div>
        </main>
    );
}
