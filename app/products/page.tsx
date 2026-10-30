
import ProductCatalog from "@/components/ProductCatalog";

export default function ProductsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-12">
      <div className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
          The TechZone collection
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-5xl">
          Find your next favourite device.
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          Explore electronics for work, study, communication,
          and entertainment.
        </p>
      </div>

      <ProductCatalog />
    </main>
  );
}
