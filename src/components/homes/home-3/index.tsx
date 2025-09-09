import HeroHomeThree from "./HeroHomeThree";
import ServiceHomeThree from "./ServiceHomeThree";
import AboutHomeThree from "./AboutHomeThree";
import GalleryHomeThree from "./GalleryHomeThree";
import FeatureHomeThree from "./FeatureHomeThree";
import PriceingHomeThree from "./PriceingHomeThree";
import CounterHomeThree from "./CounterHomeThree";
import FaqHomeThree from "./FaqHomeThree";
import BrandHomeOne from "../home/BrandHomeOne";
import TestimonialHomeThree from "./TestimonialHomeThree";
import BlogHomeThree from "./BlogHomeThree";
import SubscribeHomeThree from "./SubscribeHomeThree";
import Header from "../../../layouts/headers/Header";
import Wrapper from "../../../layouts/Wrapper";
import FooterTwo from "../../../layouts/footers/FooterTwo";

export default function HomeThree() {
  return (
    <Wrapper>
      <Header />
      <HeroHomeThree />
      <ServiceHomeThree />
      <AboutHomeThree />
      <GalleryHomeThree />
      <FeatureHomeThree />
      <PriceingHomeThree />
      <CounterHomeThree />
      <FaqHomeThree />
      <BrandHomeOne />
      <TestimonialHomeThree />
      <BlogHomeThree />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  );
}
