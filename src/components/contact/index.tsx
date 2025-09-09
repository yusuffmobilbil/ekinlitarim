import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import ContactHomeTwo from "../homes/home-2/ContactHomeTwo";
import GoogleMap from "./GoogleMap";
import ContactInfo from "./ContactInfo";
import Wrapper from "../../layouts/Wrapper";
import Header from "../../layouts/headers/Header";
import Footer from "../../layouts/footers/FooterOne";

export default function Contact() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="İletişim" subtitle="İletişim" />
      <ContactHomeTwo />
      <GoogleMap />
      <ContactInfo />
      {/* <SubscribeHomeThree /> */}
      <Footer />
    </Wrapper>
  );
}
