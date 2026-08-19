"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    name: "خرید اکانت گرامرلی Grammarly با ایمیل شما (با ۹۱% تخفیف)",
    image: "offer1.webp",
    hoverimage: "offer1h.webp",
    oldPrice: "۱٫۱۹۹٫۰۰۰",
    price: "۱۹۹٫۰۰۰",
    discount: " ۹۱%",
    link: "/products/11",
  },
  {
    name: "خرید دوره آموزشی از یودمی Udemy با اکانت شما با (با ۹۱% تخفیف)",
    image: "offer2.webp",
    oldPrice: "۶٫۵۹۹٫۰۰۰",
    price: "۴۹۹٫۰۰۰",
    discount: "17%",
    link: "/products/12",
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
  {
    name: "YouTube Premium3",
    image: "/products/youtube.jpg",
    oldPrice: "200,000",
    price: "160,000",
    discount: "20%",
  },
  {
    name: "ChatGPT Plus3",
    image: "/products/chatgpt.jpg",
    oldPrice: "500,000",
    price: "400,000",
    discount: "20%",
  },
  {
    name: "Netflix Premium4",
    image: "/products/netflix.jpg",
    oldPrice: "209,000",
    price: "199,000",
    discount: "5%",
  },
  {
    name: "YouTube Premium32",
    image: "/products/youtube.jpg",
    oldPrice: "200,000",
    price: "160,000",
    discount: "20%",
  },
  {
    name: "ChatGPT Plus30",
    image: "/products/chatgpt.jpg",
    oldPrice: "500,000",
    price: "400,000",
    discount: "20%",
  },
  {
    name: "Netflix Premium40",
    image: "/products/netflix.jpg",
    oldPrice: "209,000",
    price: "199,000",
    discount: "5%",
  },
];

export default function Offers() {
  const [start, setStart] = useState(0);

  const next = () => {
    if (start < products.length - 3) {
      setStart(start + 1);
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <section
      dir="rtl"
      className="flex bg-[#d22c4e] mx-90 mb-12 p-4  gap-5 rounded-2xl overflow-hidden"
    >
      
      <div className="flex flex-col justify-evenly items-center p-10 my-4  gap-6 font-sans text-center text-white min-w-[180px]">
        <h2 className="text-3xl font-bold">
          پیشنهاد <br />
          شگفت‌ <br />
          انگیز
        </h2>
        <img className="w-7 h-7" src="percent.webp" alt="" />

        <div>
          <button onClick={prev} className="px-3 text-xl">
            ❮
          </button>

          <button onClick={next} className="px-3 text-xl">
            ❯
          </button>
        </div>
      </div>

      
      <div className="overflow-hidden flex-1">
        <div
          className="flex  gap-3 transition-transform duration-500"
          style={{
            transform: `translateX(${start * 274}px)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white font-sans rounded-xl p-4 min-w-[250px] "
            >
              <span className="bg-[#d22c4e] text-white px-1 py-1 absolute m-2.5 rounded-full text-sm">
                {product.discount}
              </span>

              <img
                src={product.image}
                className="w-full h-50 object-center hover:im"
                alt={product.name}
              />

             

              <h3 className="mt-3 font-bold">{product.name}</h3>

              <div className="mt-3">
                <p className="text-gray-400 line-through text-sm mt-2">
                  {product.oldPrice} تومان
                </p>

                <p className="font-bold text-lg">{product.price} تومان</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
