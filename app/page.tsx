import React from 'react'
import { LuShoppingCart } from 'react-icons/lu';
import { GiCheckMark } from "react-icons/gi";


function Home() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-950'>
      <div className="bg-slate-950 px-4 py-2 text-center text-sm text-white">
        Welcome to TechZone — Quality electronics, delivered to you.
      </div>

      <header className='border-b bg-white'>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5">
          <a href="/" className="text-2xl font-black tracking-tight">
            Tech<span className='text-blue-600'>Zone</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="#categories" className="hover:text-blue-600">Categories</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
          </nav>

          <a
            href="#products"
            className="flex rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <LuShoppingCart /> Shop Now
          </a>
        </div>
      </header>

      <section className='mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24'>
        <div>
          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-600">
            Your electronics destination
          </p>

          <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Upgrade your world with better technology.
          </h1>

          <p className="mt-6 max-w-lg leading-7 text-slate-600">
            Discover laptops, smartphones, audio devices and more.
            Find the technology you need at prices you'll love.
          </p>

          <a
            href="#products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
          >
            Explore Products →
          </a>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
            <span className='flex'><GiCheckMark /> Quality products</span>
            <span className='flex'><GiCheckMark /> Secure checkout</span>
            <span className='flex'><GiCheckMark /> Customer support</span>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
