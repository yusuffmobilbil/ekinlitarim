import FooterTwo from "../../layouts/footers/FooterTwo";
import Header from "../../layouts/headers/Header";
import Wrapper from "../../layouts/Wrapper";
import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import ServiceDetailsArea from "./ServiceDetailsArea";

export default function ServiceDetails() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  );
}
