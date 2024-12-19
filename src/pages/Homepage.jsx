import Banner from "@/components/Banner";
import Header from "@/components/Header/Header";
import HeroVideo from "@/components/HeroVideo";
import Infor from "@/components/Infor";
import Statistic from "@/components/Statistic";
import Services from "@/components/Services";
import SubBanner from "@/components/SubBanner";
import ProductsCharacteristic from "@/components/Products/ProductsCharacteristic";
import Footer from "@/components/Footer/Footer";
import WorkWithUs from "@/components/WorkWithUs";
const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Infor />
      <HeroVideo />
      <Statistic />
      <Services />
      <SubBanner />
      <ProductsCharacteristic />
      <WorkWithUs />
      <Footer />
    </div>
  );
};

export default Homepage;
