import Breadcrumnd from "../common/Breadcrumnd";
import AboutHomeOne from "../homes/home/AboutHomeOne";
import ServiceHomeOne from "../homes/home/ServiceHomeOne";
import TestimoniaHomeOne from "../homes/home/TestimoniaHomeOne";
import CtaHomeOne from "../homes/home/CtaHomeOne";
import PortfolioHomeOne from "../homes/home/PortfolioHomeOne";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import BrandHomeOne from "../homes/home/BrandHomeOne";
import Header from "../../layouts/headers/Header";
import Footer from "../../layouts/footers/FooterOne";
import Wrapper from "../../layouts/Wrapper";
import AboutHomeTwo from "../homes/home-2/AboutHomeTwo";

export default function About() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="Hakkımızda" subtitle="Hakkımızda" />
      <AboutHomeTwo />
      <TestimoniaHomeOne />

      <Footer />
    </Wrapper>
  );
}
