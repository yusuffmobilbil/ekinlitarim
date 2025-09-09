import Breadcrumnd from "../common/Breadcrumnd";
import AboutHomeOne from "../homes/home/AboutHomeOne";
import ServiceHomeOne from "../homes/home/ServiceHomeOne";
import TestimoniaHomeOne from "../homes/home/TestimoniaHomeOne";
import CtaHomeOne from "../homes/home/CtaHomeOne";
import PortfolioHomeOne from "../homes/home/PortfolioHomeOne";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import BrandHomeOne from "../homes/home/BrandHomeOne";
import Header from "../../layouts/headers/Header";
import FooterTwo from "../../layouts/footers/FooterTwo";
import Wrapper from "../../layouts/Wrapper";

export default function About() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="Hakkımızda" subtitle="Hakkımızda" />
      <AboutHomeOne />
      <ServiceHomeOne style_2={true} />
      <TestimoniaHomeOne />
      <CtaHomeOne />
      <PortfolioHomeOne style_2={true} />
      <BrandHomeOne style_3={true} />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  );
}
