import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import Infor from "@/components/Infor";
import Statistic from "@/components/Statistic";
import Services from "@/components/Services";
import SubBanner from "@/components/SubBanner";
import Service from "@/components/Service";

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
      <Service />
    </div>
  );
};

export default Homepage;
