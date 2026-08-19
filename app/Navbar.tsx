function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-90 py-9 gap-70 h-35 bg-[#0c0c15] font-sans font-bold text-white ">
      <div className="flex flex-row items-center justify-between gap-8">
        <img className="w-18 h-18" src="image1.webp" alt="لوگو" />
        <button className=" w-12 h-8 rounded-3xl hover:bg-[#ef394e] ">خانه</button>
        <button className=" w-20 h-8 rounded-3xl hover:bg-[#ef394e] "> خدمات ما</button>
        <button className=" w-13 h-8 rounded-3xl hover:bg-[#ef394e] ">وبلاگ</button>
        <button className=" w-20 h-8 rounded-3xl hover:bg-[#ef394e] ">درباره ما</button>
      </div>
      <div className="flex flex-row items-center justify-between gap-8 ">
       
        <div className="flex flex-row items-center justify-between gap-5">
          <button>سرچ</button>
          <button>سبد</button>
        </div>

        <div className="flex flex-row items-center justify-between gap-5">
          <button>عضویت</button>
         <h3 className="text-xs font-thin">|</h3>
          <button>وارد شوید</button>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default Header;
