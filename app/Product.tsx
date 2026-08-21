// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const products = [
//   {
//     name: "خرید اکانت ChatGPT Plus 4 و ChatGPT 5 (شارژ آنی)",
//     image: "/image-products1.webp",
//     hoverImage: "/image-1.webp",
//     oldPrice: "209,000",
//     price: "199,000",
//     link: "/services/service12",
//     discount: "5%",
//   },
//   {
//     name: "سرویس ویدیویی",
//     image: "/image-products2.webp",
//     oldPrice: "209,000",
//     price: "199,000",
//     link: "/services/service11",
//     discount: "5%",
//   },
//   {
//     name: "سرویس صوتی",
//     image: "/image-products3.webp",
//     oldPrice: "209,000",
//     price: "199,000",
//     link: "/services/service10",
//     discount: "5%",
//   },
//   {
//     name: "سرویس آموزشی",
//     image: "/image-products4.webp",
//     oldPrice: "209,000",
//     price: "199,000",
//     link: "/services/service9",
//     discount: "5%",
//   },
// ];

// export default function Products() {
//   return (
//     <section className="flex flex-col  items-center justify-center gap-6 w-full px-4 py-0">
//       <div className="flex flex-col items-center justify-center mb-6 mt-12">
//         <div className="mb-4 h-10 w-0.25 rounded-full bg-black "></div>

//         <h2 className="font-sans text-2xl font-bold">پرفروش های این ماه</h2>
//       </div>

//       <div className="grid grid-cols-4 w-295 h-95 gap-3 ">
//         {products.map((product) => (
//           <Link
//             key={product.name}
//             href={product.link}
//             className="group flex flex-col items-center rounded-xl  bg-white p-4 "
//           >
//             <span className="bg-[#d22c4e] text-white px-1 py-1 absolute  rounded-full text-sm">
//               {product.discount}
//             </span>

//             <Image
//               src={product.image}
//               alt={product.name}
//               width={100}
//               height={100}
//               // className="h-80 w-80 object-contain transition group-hover:scale-105"
//               className="h-80 w-80 object-contain transition-opacity duration-300 group-hover:opacity-0"
//             />

//             <img
//               src={product.hoverImage}
//               alt={product.name}
//               className="absolute inset-0 h-80 w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//             />

//             <span className="mt-3 font-sans text-center text-sm font-bold text-black ">
//               {product.name}
//             </span>
//             <div className="mt-3">
//               <p className="text-gray-400 line-through text-sm mt-2">
//                 {product.oldPrice} تومان
//               </p>

//               <p className="font-bold text-lg">{product.price} تومان</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "خرید اکانت ChatGPT Plus 4 و ChatGPT 5 (شارژ آنی)",
    image: "/image-products1.webp",
    hoverImage: "/image-products1h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service12",
    discount: "5%",
  },
  {
    name: "سرویس ویدیویی",
    image: "/image-products2.webp",
    hoverImage: "/image-products2h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service11",
    discount: "5%",
  },
  {
    name: "سرویس صوتی",
    image: "/image-products3.webp",
    hoverImage: "/image-products3h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service10",
    discount: "5%",
  },
  {
    name: "سرویس آموزشی",
    image: "/image-products4.webp",
    hoverImage: "/image-products4h.webp",
    oldPrice: "209,000",
    price: "199,000",
    link: "/services/service9",
    discount: "5%",
  },
];

export default function Products() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-6 px-4 py-0">
      
      {/* عنوان */}
      <div className="mt-12 mb-6 flex flex-col items-center justify-center">
        <div className="mb-4 h-10 w-0.25 rounded-full bg-black"></div>

        <h2 className="font-sans text-2xl font-bold">
          پرفروش های این ماه
        </h2>
      </div>

      {/* محصولات */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group relative flex min-h-[300px] flex-col items-center rounded-xl bg-white p-4"
          >
            {/* درصد تخفیف */}
            <span className="absolute right-10 top-7 z-10 rounded-full bg-[#d22c4e] px-2 py-1 text-sm text-white">
              {product.discount}
            </span>

            {/* تصاویر */}
            <div className="relative h-64 w-full">
              
              {/* تصویر اصلی */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* تصویر هنگام هاور */}
              <Image
                src={product.hoverImage}
                alt={product.name}
                fill
                className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

            </div>

            {/* نام محصول */}
            <span className="mt-3 text-center font-sans text-sm font-bold text-black">
              {product.name}
            </span>

            {/* قیمت */}
            <div className="mt-3 text-center">
              <p className="mt-2 text-sm text-gray-400 line-through">
                {product.oldPrice} تومان
              </p>

              <p className="text-lg font-bold">
                {product.price} تومان
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}