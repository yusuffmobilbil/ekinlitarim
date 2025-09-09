import Breadcrumnd from "../common/Breadcrumnd";
import ProductListArea from "./ProductListArea";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import Wrapper from "../../layouts/Wrapper";
import Header from "../../layouts/headers/Header";
import FooterTwo from "../../layouts/footers/FooterTwo";

export default function ProductList() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="Product List" subtitle="Product List" />
      <ProductListArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  );
}
