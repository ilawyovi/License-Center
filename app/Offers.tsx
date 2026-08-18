"use client";

import { useState } from "react";

const products = [
  {
    name: "Netflix Premium",
    image: "/products/netflix.jpg",
    oldPrice: "209,000",
    price: "199,000",
    discount: "5%",
  },
  {
    name: "Spotify Premium",
    image: "/products/spotify.jpg",
    oldPrice: "180,000",
    price: "150,000",
    discount: "17%",
  },
  {
    name: "YouTube Premium",
    image: "/products/youtube.jpg",
    oldPrice: "200,000",
    price: "160,000",
    discount: "20%",
  },
  {
    name: "ChatGPT Plus",
    image: "/products/chatgpt.jpg",
    oldPrice: "500,000",
    price: "400,000",
    discount: "20%",
  },
];

export default function Offers() {
  const [start, setStart] = useState(0);

  const next = () => {
    if (start < products.length - 1) {
      setStart(start + 1);
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <section className="flex flex-row bg-[#d22c4e] mx-90 mb-15 mt-0 p-5 gap-5 rounded-2xl">

      <div className="flex flex-col justify-evenly items-center mb-5 text-white">
        <h2 className="text-2xl font-bold">
          پیشنهاد <br />
          شگفت‌ <br />
          انگیز
        </h2>

        <div>
          <button onClick={prev} className="px-3 text-xl">
            ❮
          </button>

          <button onClick={next} className="px-3 text-xl">
            ❯
          </button>
        </div>
      </div>

      <div className="flex  gap-4 overflow-hidden">
        {products.slice(start, start + 3).map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-xl p-4 min-w-[250px]"
          >
            <img src={product.image} className="w-full h-40 object-contain" />

            <h3 className="mt-3 font-bold">{product.name}</h3>

            <div className="mt-3">
              <span className="bg-[#d22c4e] text-white px-2 py-1 rounded-full text-sm">
                {product.discount}
              </span>

              <p className="text-gray-400 line-through text-sm mt-2">
                {product.oldPrice} تومان
              </p>

              <p className="font-bold text-lg">{product.price} تومان</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
