import About from "./About";
import CategoryA from "./CategoryA";
import CategoryB from "./CategoryB";
import Header from "./Header";
import Herosection from "./Herosection";
import Navbar from "./Navbar";
import Offers from "./Offers";
import Product from "./Product";
import Services from "./Services";
import SpecialServices from "./SpecialServices";
import SupportButton from "./SupportButton";


export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />  
      <Offers />
      <Services />
      <Product />
      <CategoryA />
      <SpecialServices />
      <CategoryB />
      <About />
      <SupportButton />
    </div>
  );
}
