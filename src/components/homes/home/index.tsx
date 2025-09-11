import HeroHomeOne from "./HeroHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import GalleryHomeOne from "./GalleryHomeOne";
import CounterHomeOne from "./CounterHomeOne";
import ServiceHomeOne from "./ServiceHomeOne";
import TestimoniaHomeOne from "./TestimoniaHomeOne";
import PortfolioHomeOne from "./PortfolioHomeOne";
import CtaHomeOne from "./CtaHomeOne";
import FeatureVideo from "./FeatureVideo";
import BlogHomeOne from "./BlogHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import SubscribeHomeOne from "./SubscribeHomeOne";
import Header from "../../../layouts/headers/Header";
import FooterOne from "../../../layouts/footers/FooterOne";
import Wrapper from "../../../layouts/Wrapper";

export default function HomeOne() {
  return (
    <Wrapper>
      <Header />
      <HeroHomeOne />
      <AboutHomeOne />
      {/* <GalleryHomeOne />
      <CounterHomeOne />
      <ServiceHomeOne /> */}
      <TestimoniaHomeOne />
      {/* <PortfolioHomeOne />
      <CtaHomeOne />
      <FeatureVideo />
      <BlogHomeOne />
      <BrandHomeOne />
      <SubscribeHomeOne /> */}
      <FooterOne />
    </Wrapper>
  );
}
