
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="mx-auto max-w-7xl px-5">
      <section className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Your electronics destination
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Upgrade your world with better technology.
          </h1>

          <p className="mt-6 max-w-lg leading-7 text-slate-600">
            Discover laptops, smartphones, audio devices, and more.
            Find the technology you need at prices you'll love.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white hover:bg-blue-700"
          >
            Explore Products →
          </Link>
        </div>

        <div className="flex min-h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 via-indigo-100 to-slate-200 p-8">
          <div className="text-center">
            <div className="text-8xl sm:text-9xl">💻</div>
            <p className="mt-5 text-xl font-bold">
              Technology for everyone
            </p>
            <p className="mt-2 text-slate-600">
              Discover your next favourite device.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Our collection
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
