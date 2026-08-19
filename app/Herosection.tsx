"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  { image: "/image-herosection1.webp", link: "/products/1" },
  { image: "/image-herosection2.webp", link: "/products/2" },
  { image: "/image-herosection3.webp", link: "/products/3" },
  { image: "/image-herosection4.webp", link: "/products/4" },
  { image: "/image-herosection5.webp", link: "/products/5" },
  { image: "/image-herosection6.webp", link: "/products/6" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mx-88 mt-15 mb-12">
      <Link href={slides[current].link}>
        <img
          src={slides[current].image}
          alt=""
          className="w-full h-full object-cover cursor-pointer"
        />
      </Link>

      <button
        onClick={prevSlide}
        className="absolute left-91 top-140 text-white px-4 cursor-pointer "
      >
        ❯
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-91 top-140 text-white px-4 cursor-pointer"
      >
        ❮
      </button>
    </div>
  );
}
