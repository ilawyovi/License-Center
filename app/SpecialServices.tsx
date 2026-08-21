"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "سرویس های کاربردی و ویژه",
    link: "/category/utility",

    products: [
      {
        name: "ChatGPT Plus",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "209,000",
        price: "199,000",
        discount: "5%",
        link: "/services/service12",
      },
      {
        name: "Grammarly Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "220,000",
        discount: "12%",
        link: "/services/service11",
      },
      {
        name: "Canva Pro",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service10",
      },
      {
        name: "Google One",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service9",
      },
      {
        name: "Microsoft 365",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "500,000",
        price: "450,000",
        discount: "10%",
        link: "/services/service8",
      },
      {
        name: "Notion Plus",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service7",
      },
      {
        name: "Adobe Creative Cloud",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "600,000",
        price: "520,000",
        discount: "13%",
        link: "/services/service6",
      },
      {
        name: "Dropbox Plus",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "300,000",
        price: "270,000",
        discount: "10%",
        link: "/services/service5",
      },
      {
        name: "Evernote Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "250,000",
        price: "210,000",
        discount: "16%",
        link: "/services/service4",
      },
      {
        name: "Perplexity Pro",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service3",
      },
    ],
  },

  {
    title: "سرویس های پخش فیلم و سریال",
    link: "/category/vod",

    products: [
      {
        name: "Netflix Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service12",
      },
      {
        name: "YouTube Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service11",
      },
      {
        name: "Disney Plus",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "300,000",
        price: "260,000",
        discount: "13%",
        link: "/services/service10",
      },
      {
        name: "Apple TV Plus",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "350,000",
        price: "300,000",
        discount: "14%",
        link: "/services/service9",
      },
      {
        name: "Amazon Prime Video",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "280,000",
        price: "240,000",
        discount: "14%",
        link: "/services/service8",
      },
      {
        name: "HBO Max",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service7",
      },
      {
        name: "Paramount Plus",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "280,000",
        price: "230,000",
        discount: "18%",
        link: "/services/service6",
      },
      {
        name: "Crunchyroll",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "250,000",
        price: "210,000",
        discount: "16%",
        link: "/services/service5",
      },
      {
        name: "MUBI",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "260,000",
        discount: "13%",
        link: "/services/service4",
      },
      {
        name: "Peacock",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "270,000",
        price: "220,000",
        discount: "19%",
        link: "/services/service3",
      },
    ],
  },

  {
    title: "سرویس های پخش موسیقی",
    link: "/category/podcast-and-internet-radio",

    products: [
      {
        name: "Spotify Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service12",
      },
      {
        name: "Apple Music",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "250,000",
        price: "210,000",
        discount: "16%",
        link: "/services/service11",
      },
      {
        name: "YouTube Music",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "250,000",
        price: "200,000",
        discount: "20%",
        link: "/services/service10",
      },
      {
        name: "Tidal",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service9",
      },
      {
        name: "SoundCloud Go",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "250,000",
        price: "220,000",
        discount: "12%",
        link: "/services/service8",
      },
      {
        name: "Deezer Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "240,000",
        price: "200,000",
        discount: "17%",
        link: "/services/service7",
      },
      {
        name: "Amazon Music",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "260,000",
        price: "220,000",
        discount: "15%",
        link: "/services/service6",
      },
      {
        name: "Pandora Premium",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "280,000",
        price: "230,000",
        discount: "18%",
        link: "/services/service5",
      },
      {
        name: "Qobuz",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service4",
      },
      {
        name: "Audiomack",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "220,000",
        price: "190,000",
        discount: "14%",
        link: "/services/service3",
      },
    ],
  },

  {
    title: "سرویس های آموزشی",
    link: "/category/education",

    products: [
      {
        name: "Udemy Premium",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service2",
      },
      {
        name: "Coursera Plus",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "350,000",
        price: "290,000",
        discount: "17%",
        link: "/services/service1",
      },
      {
        name: "Skillshare Premium",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service2",
      },
      {
        name: "LinkedIn Learning",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service1",
      },
      {
        name: "MasterClass",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "500,000",
        price: "430,000",
        discount: "14%",
        link: "/services/service2",
      },
      {
        name: "Brilliant Premium",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "300,000",
        price: "250,000",
        discount: "17%",
        link: "/services/service1",
      },
      {
        name: "DataCamp",
        image: "/image-products3.webp",
        hoverImage: "/image-3.webp",
        oldPrice: "450,000",
        price: "390,000",
        discount: "13%",
        link: "/services/service2",
      },
      {
        name: "Pluralsight",
        image: "/image-products4.webp",
        hoverImage: "/image-4.webp",
        oldPrice: "400,000",
        price: "350,000",
        discount: "12%",
        link: "/services/service1",
      },
      {
        name: "Codecademy Pro",
        image: "/image-products1.webp",
        hoverImage: "/image-1.webp",
        oldPrice: "350,000",
        price: "300,000",
        discount: "14%",
        link: "/services/service2",
      },
      {
        name: "Educative",
        image: "/image-products2.webp",
        hoverImage: "/image-2.webp",
        oldPrice: "400,000",
        price: "340,000",
        discount: "15%",
        link: "/services/service1",
      },
    ],
  },
];
export default function CategoryServices() {
  /*
   * موقعیت فعلی هر دسته
   *
   * برای هر دسته یک position جدا داریم.
   * بنابراین حرکت دسته اول هیچ تأثیری
   * روی دسته دوم، سوم یا چهارم ندارد.
   */
  const [current, setCurrent] = useState(
    categories.map((category) => category.products.length)
  );

  /*
   * تعداد کارت‌های قابل نمایش
   *
   * موبایل: 1
   * تبلت کوچک: 2
   * تبلت: 3
   * لپ‌تاپ و دسکتاپ: 4
   */
  const [visibleCount, setVisibleCount] = useState(4);

  /*
   * وضعیت انیمیشن برای هر دسته جداگانه
   *
   * مثال:
   * [true, true, false, true]
   *
   * یعنی فقط دسته سوم موقتاً بدون انیمیشن است.
   */
  const [transitionEnabled, setTransitionEnabled] = useState(
    categories.map(() => true)
  );

  /*
   * وضعیت Drag برای هر دسته
   *
   * هر دسته Drag مستقل خودش را دارد.
   */
  const [dragging, setDragging] = useState(
    categories.map(() => false)
  );

  /*
   * مقدار حرکت موقت Drag برای هر دسته
   *
   * اگر دسته اول را بکشیم:
   *
   * [50, 0, 0, 0]
   *
   * بنابراین فقط دسته اول حرکت می‌کند.
   */
  const [dragOffset, setDragOffset] = useState(
    categories.map(() => 0)
  );

  /*
   * محل شروع Drag برای هر دسته
   */
  const dragStartX = useRef(
    categories.map(() => 0)
  );

  /*
   * مقدار Drag برای جلوگیری از کلیک اشتباهی روی محصول
   */
  const dragDistance = useRef(
    categories.map(() => 0)
  );

  /*
   * تعداد کارت‌های قابل نمایش را
   * با اندازه صفحه هماهنگ می‌کنیم.
   */
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
    };
  }, []);

  /*
   * وقتی تعداد کارت‌های قابل نمایش تغییر کند،
   * تمام اسلایدرها را دوباره روی نسخه وسط قرار می‌دهیم.
   */
  useEffect(() => {
    setTransitionEnabled(
      categories.map(() => false)
    );

    setCurrent(
      categories.map(
        (category) => category.products.length
      )
    );

    setDragging(
      categories.map(() => false)
    );

    setDragOffset(
      categories.map(() => 0)
    );

    const timer = setTimeout(() => {
      setTransitionEnabled(
        categories.map(() => true)
      );
    }, 50);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  /*
   * رفتن به محصول بعدی
   *
   * فقط categoryIndex مربوط به همان دسته تغییر می‌کند.
   */
  const next = (categoryIndex: number) => {
    if (dragging[categoryIndex]) return;

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    setCurrent((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] += 1;

      return nextState;
    });
  };

  /*
   * رفتن به محصول قبلی
   *
   * فقط همان دسته حرکت می‌کند.
   */
  const previous = (categoryIndex: number) => {
    if (dragging[categoryIndex]) return;

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    setCurrent((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] -= 1;

      return nextState;
    });
  };

  /*
   * پایان انیمیشن
   *
   * چون محصولات سه بار تکرار شده‌اند،
   * وقتی به کپی اول یا سوم برسیم،
   * بدون اینکه کاربر متوجه شود به کپی وسط برمی‌گردیم.
   */
  const handleTransitionEnd = (
    categoryIndex: number
  ) => {
    const length =
      categories[categoryIndex].products.length;

    const position = current[categoryIndex];

    /*
     * رسیدن به کپی سوم
     *
     * مثال:
     *
     * 1 2 3 ... 10
     * 1 2 3 ... 10
     * 1 2 3 ... 10
     *
     * اگر position از 20 عبور کند،
     * به position - 10 برمی‌گردیم.
     */
    if (position >= length * 2) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = false;

        return nextState;
      });

      setCurrent((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] =
          position - length;

        return nextState;
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled((prev) => {
            const nextState = [...prev];

            nextState[categoryIndex] = true;

            return nextState;
          });
        });
      });

      return;
    }

    /*
     * رسیدن به کپی اول
     */
    if (position < length) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = false;

        return nextState;
      });

      setCurrent((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] =
          position + length;

        return nextState;
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled((prev) => {
            const nextState = [...prev];

            nextState[categoryIndex] = true;

            return nextState;
          });
        });
      });
    }
  };

  /*
   * شروع Drag
   *
   * categoryIndex مشخص می‌کند
   * کدام یک از چهار دسته در حال Drag شدن است.
   */
  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number
  ) => {
    /*
     * فقط کلیک اصلی موس
     */
    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    /*
     * فقط همین دسته وارد حالت Drag می‌شود.
     */
    setDragging((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    /*
     * انیمیشن را فقط برای همین دسته خاموش می‌کنیم.
     */
    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = false;

      return nextState;
    });

    /*
     * محل شروع Drag
     */
    dragStartX.current[categoryIndex] =
      event.clientX;

    dragDistance.current[categoryIndex] = 0;

    /*
     * Offset فقط برای همین دسته صفر می‌شود.
     */
    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = 0;

      return nextState;
    });

    /*
     * Pointer Capture
     *
     * باعث می‌شود حتی اگر موس از محدوده خارج شود،
     * Drag همچنان درست کار کند.
     */
    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

  /*
   * حرکت Drag
   *
   * این قسمت فقط Track همان دسته را حرکت می‌دهد.
   */
  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number
  ) => {
    if (!dragging[categoryIndex]) return;

    const difference =
      event.clientX -
      dragStartX.current[categoryIndex];

    dragDistance.current[categoryIndex] =
      Math.abs(difference);

    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = difference;

      return nextState;
    });
  };

  /*
   * پایان Drag
   */
  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number
  ) => {
    if (!dragging[categoryIndex]) return;

    const difference =
      event.clientX -
      dragStartX.current[categoryIndex];

    const distance = Math.abs(difference);

    /*
     * Drag را فقط برای همین دسته تمام می‌کنیم.
     */
    setDragging((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = false;

      return nextState;
    });

    /*
     * Offset را فقط برای همین دسته صفر می‌کنیم.
     */
    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = 0;

      return nextState;
    });

    /*
     * آزاد کردن Pointer Capture
     */
    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }

    /*
     * اگر کمتر از 50px کشیده شده باشد،
     * Drag محسوب نمی‌شود.
     */
    if (distance < 50) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = true;

        return nextState;
      });

      return;
    }

    /*
     * Drag به سمت راست
     *
     * محصول قبلی
     */
    if (difference > 0) {
      setTransitionEnabled((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] = true;

        return nextState;
      });

      setCurrent((prev) => {
        const nextState = [...prev];

        nextState[categoryIndex] -= 1;

        return nextState;
      });

      return;
    }

    /*
     * Drag به سمت چپ
     *
     * محصول بعدی
     */
    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    setCurrent((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] += 1;

      return nextState;
    });
  };

  /*
   * اگر Pointer به هر دلیل لغو شود،
   * Drag فقط برای همان دسته لغو می‌شود.
   */
  const handlePointerCancel = (
    event: React.PointerEvent<HTMLDivElement>,
    categoryIndex: number
  ) => {
    setDragging((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = false;

      return nextState;
    });

    setDragOffset((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = 0;

      return nextState;
    });

    setTransitionEnabled((prev) => {
      const nextState = [...prev];

      nextState[categoryIndex] = true;

      return nextState;
    });

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }
  };

  /*
   * اگر کاربر محصول را Drag کرده باشد،
   * نباید بعد از رها کردن موس وارد لینک شود.
   */
  const handleProductClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    categoryIndex: number
  ) => {
    if (
      dragDistance.current[categoryIndex] > 10
    ) {
      event.preventDefault();

      dragDistance.current[categoryIndex] = 0;
    }
  };

  /*
   * فاصله بین کارت‌ها
   */
  const gap = 12;

  /*
   * عرض هر کارت
   *
   * 1 کارت:
   * 100%
   *
   * 2 کارت:
   * (100% - 12px) / 2
   *
   * 3 کارت:
   * (100% - 24px) / 3
   *
   * 4 کارت:
   * (100% - 36px) / 4
   */
  const cardWidth = `calc(
    (100% - ${(visibleCount - 1) * gap}px)
    / ${visibleCount}
  )`;

  /*
   * مقدار حرکت هر مرحله
   *
   * هر بار فقط یک کارت جابه‌جا می‌شود.
   */
  const step = `calc(
    (100% - ${(visibleCount - 1) * gap}px)
    / ${visibleCount}
    + ${gap}px
  )`;

  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-3 sm:gap-14 sm:px-4 md:gap-16 md:px-6 lg:px-8"
    >
      {categories.map(
        (category, categoryIndex) => {
          const position =
            current[categoryIndex];

          /*
           * سه نسخه از محصولات برای لوپ بی‌نهایت
           */
          const loopProducts = [
            ...category.products,
            ...category.products,
            ...category.products,
          ];

          return (
            <div
              key={category.title}
              className="flex w-full flex-col gap-5"
            >
              {/* عنوان دسته */}
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-sans text-lg font-bold sm:text-xl md:text-2xl">
                  {category.title}
                </h2>

                <Link
                  href={category.link}
                  className="shrink-0 text-sm font-bold text-[#d22c4e] transition-opacity duration-200 hover:opacity-70"
                >
                  مشاهده همه
                </Link>
              </div>

              {/* ردیف اسلایدر */}
              <div className="flex w-full items-center gap-2 sm:gap-3">

                {/*

                  دکمه سمت راست

                  در RTL این دکمه:
                  محصول بعدی را نمایش می‌دهد.
                */}
                <button
                  type="button"
                  onClick={() =>
                    next(categoryIndex)
                  }
                  aria-label="محصول بعدی"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d22c4e] text-white transition-all duration-200 hover:scale-105 hover:opacity-80 active:scale-95 sm:h-10 sm:w-10 md:h-11 md:w-11"
                >
                  ❮
                </button>

                {/* محدوده قابل مشاهده */}
                <div
                  className="min-w-0 flex-1 overflow-hidden"
                  style={{
                    touchAction: "pan-y",
                  }}
                >
                  {/* Track */}
                  <div
                    dir="ltr"
                    onPointerDown={(event) =>
                      handlePointerDown(
                        event,
                        categoryIndex
                      )
                    }
                    onPointerMove={(event) =>
                      handlePointerMove(
                        event,
                        categoryIndex
                      )
                    }
                    onPointerUp={(event) =>
                      handlePointerUp(
                        event,
                        categoryIndex
                      )
                    }
                    onPointerCancel={(event) =>
                      handlePointerCancel(
                        event,
                        categoryIndex
                      )
                    }
                    onTransitionEnd={() =>
                      handleTransitionEnd(
                        categoryIndex
                      )
                    }
                    className={`flex gap-3 ${
                      transitionEnabled[
                        categoryIndex
                      ] &&
                      !dragging[categoryIndex]
                        ? "transition-transform duration-500 ease-out"
                        : ""
                    }`}
                    style={{
                      /*
                       * حرکت اصلی اسلایدر
                       *
                       * position:
                       * مشخص می‌کند کدام محصول
                       * در موقعیت فعلی قرار دارد.
                       *
                       * dragOffset:
                       * حرکت لحظه‌ای موس/انگشت را اضافه می‌کند.
                       *
                       * مهم:
                       * dragOffset مربوط به همین categoryIndex است.
                       *
                       * بنابراین دیگر ۴ لیست
                       * همزمان حرکت نمی‌کنند.
                       */
                      transform: `translate3d(
                        calc(
                          -${position} * ${step}
                          + ${dragOffset[categoryIndex]}px
                        ),
                        0,
                        0
                      )`,

                      /*
                       * شکل موس هنگام Drag
                       */
                      cursor: dragging[
                        categoryIndex
                      ]
                        ? "grabbing"
                        : "grab",

                      /*
                       * جلوگیری از انتخاب متن
                       */
                      userSelect: "none",

                      /*
                       * بهینه‌سازی حرکت
                       */
                      willChange: "transform",
                    }}
                  >
                    {loopProducts.map(
                      (product, index) => (
                        <Link
                          key={`${product.name}-${index}`}
                          href={product.link}
                          dir="rtl"
                          draggable={false}
                          onClick={(event) =>
                            handleProductClick(
                              event,
                              categoryIndex
                            )
                          }
                          style={{
                            /*
                             * عرض کارت
                             */
                            flex: `0 0 ${cardWidth}`,
                          }}
                          className="group relative flex min-h-[280px] flex-col items-center rounded-xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                          {/* درصد تخفیف */}
                          <span className="absolute right-3 top-3 z-10 rounded-full bg-[#d22c4e] px-2 py-1 text-xs text-white">
                            {product.discount}
                          </span>

                          {/* محدوده تصویر */}
                          <div className="relative h-40 w-full sm:h-44">

                            {/* تصویر اصلی */}
                            <Image
                              src={
                                product.image
                              }
                              alt={
                                product.name
                              }
                              fill
                              draggable={false}
                              sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 23vw"
                              className="pointer-events-none object-contain transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* تصویر هنگام Hover */}
                            <Image
                              src={
                                product.hoverImage
                              }
                              alt={
                                product.name
                              }
                              fill
                              draggable={false}
                              sizes="(max-width: 639px) 90vw, (max-width: 767px) 45vw, (max-width: 1023px) 30vw, 23vw"
                              className="pointer-events-none object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                          </div>

                          {/* نام محصول */}
                          <h3 className="mt-3 line-clamp-2 text-center text-sm font-bold leading-6">
                            {product.name}
                          </h3>

                          {/* قیمت */}
                          <div className="mt-auto flex flex-col items-center">
                            <p className="mt-3 text-sm text-gray-400 line-through">
                              {
                                product.oldPrice
                              }{" "}
                              تومان
                            </p>

                            <p className="mt-1 text-lg font-bold">
                              {product.price}{" "}
                              تومان
                            </p>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/*

                  دکمه سمت چپ

                  در RTL:
                  محصول قبلی را نشان می‌دهد.
                */}
                <button
                  type="button"
                  onClick={() =>
                    previous(categoryIndex)
                  }
                  aria-label="محصول قبلی"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d22c4e] text-white transition-all duration-200 hover:scale-105 hover:opacity-80 active:scale-95 sm:h-10 sm:w-10 md:h-11 md:w-11"
                >
                  ❯
                </button>
              </div>

              {/*

                بنر بعد از دسته دوم

                categoryIndex:
                0 = کاربردی
                1 = فیلم و سریال
                2 = موسیقی
                3 = آموزشی
              */}
              {categoryIndex === 1 && (
                <Link
                  href="/category/banner-1"
                  className="group mt-2 block w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src="/banner-1.webp"
                    alt="بنر خدمات"
                    width={1200}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>
              )}

              {/* بنر بعد از دسته چهارم */}
              {categoryIndex === 3 && (
                <Link
                  href="/category/banner-2"
                  className="group mt-2 block w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src="/banner-2.webp"
                    alt="بنر آموزش"
                    width={1200}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>
              )}
            </div>
          );
        }
      )}
    </section>
  );
}