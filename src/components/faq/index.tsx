import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FaqHomeThree from "../homes/home-3/FaqHomeThree";
import CounterHomeThree from "../homes/home-3/CounterHomeThree";
import Wrapper from "../../layouts/Wrapper";
import Header from "../../layouts/headers/Header";
import FooterTwo from "../../layouts/footers/FooterTwo";

export default function Faq() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="Faq" subtitle="Faq" />
      <FaqHomeThree />
      <CounterHomeThree style_2={true} />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  );
}
