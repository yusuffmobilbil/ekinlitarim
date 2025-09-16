import { Link } from "react-router-dom";

export default function HeroHomeOne() {
  return (
    <>
      <section
        className="banner-section style-v1 overflow-hidden"
        style={{ backgroundImage: "url(assets/img/banner/hero1-bg.jpg)" }}
      >
        <div className="container">
          <div
            style={{ padding: "0 24px" }}
            className="row g-4 align-items-center position-relative"
          >
            <div className="col-lg-7 col-md-7 col-sm-9">
              <div className="hero-contentv01">
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                  Doğanın ritmiyle
                  <span className="harves">büyüyoruz.</span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  "Toprakla buluşan her şey, doğallığıyla yanınızda.” <br />{" "}
                  Taze ve güvenilir ürünleri doğadan sofralara getiriyoruz.
                </p>
                <ul className="hero-list wow fadeInUp" data-wow-delay="0.8s">
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    Tohumla başlar, keyifle devam eder.
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    Doğayla buluşan her ürün, tazeliğiyle yanınızda.
                  </li>
                </ul>
                <Link
                  to="/#"
                  className="cmn-btn round100 wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  Daha Fazla
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-8">
              <div
                className="hero-thumbv01 position-relative wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <img
                  src="/assets/img/banner/hero1.png"
                  alt="img"
                  className="mimg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
