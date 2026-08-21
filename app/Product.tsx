"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "خرید اکانت ChatGPT Plus 4 و ChatGPT 5 (شارژ آنی)",
    image: "/image-products1.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service12",
    discount: "5%"
  },
  {
    name: "سرویس ویدیویی",
    image: "/image-products2.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service11",
    discount: "5%"
  },
  {
    name: "سرویس صوتی",
    image: "/image-products3.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service10",
    discount: "5%"
  },
  {
    name: "سرویس آموزشی",
    image: "/image-products4.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service9",
    discount: "5%"
  },
];

export default function Products() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 w-full px-4 py-0">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="mb-4 h-10 w-0.25 rounded-full bg-black "></div>

        <h2 className="font-sans text-2xl font-bold">پرفروش های این ماه</h2>
      </div>

      <div className="grid grid-cols-4 w-295 h-95 gap-3 ">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
          >
              <span className="bg-[#d22c4e] text-white px-1 py-1 absolute m-2.5 rounded-full text-sm">
                {product.discount}
              </span>

            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="h-24 w-24 object-contain transition group-hover:scale-105"
            />

            <span className="mt-3 font-sans text-center text-sm font-bold text-black ">
              {product.name}
            </span>
            <div className="mt-3">
              <p className="text-gray-400 line-through text-sm mt-2">
                {product.oldPrice} تومان
              </p>

              <p className="font-bold text-lg">{product.price} تومان</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
