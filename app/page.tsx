import Header from "./Header";
import Herosection from "./Herosection";
import Navbar from "./Navbar";
import Offers from "./Offers";
import Services from "./Services";
// import Prodcut from "./Prodcut";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />  
      <Offers />
      <Services />
      {/* <Prodcut /> */}
    </div>
  );
}
