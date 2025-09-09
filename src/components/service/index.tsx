import Breadcrumnd from "../common/Breadcrumnd";
import ServiceArea from "./ServiceArea";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import Wrapper from "../../layouts/Wrapper";
import Header from "../../layouts/headers/Header";
import FooterTwo from "../../layouts/footers/FooterTwo";

export default function Service() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="Services" subtitle="Services" />
      <ServiceArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  );
}
