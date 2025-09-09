import FooterTwo from "../../layouts/footers/FooterTwo";
import Header from "../../layouts/headers/Header";
import Wrapper from "../../layouts/Wrapper";
import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import GalleryArea from "./GalleryArea";

export default function Gallery() {
  return (
    <Wrapper>
      <Header />
      <Breadcrumnd title="Gallery" subtitle="Gallery" />
      <GalleryArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  );
}
