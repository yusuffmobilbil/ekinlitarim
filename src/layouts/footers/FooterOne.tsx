import { Link } from "react-router-dom";

export default function FooterOne() {
  return (
    <>
      <footer className="footer-section overflow-hidden position-relative footer-style1">
        <div className="footer-widgets-wrapper footer-widget-wrapperv01">
          <div className="container">
            <div className="row g-md-4 g-4 justify-content-between">
              <div
                className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link to="/" className="footer-logo">
                      <h2 style={{ color: "#fff" }}>Ekinli Tarım</h2>
                      {/* <img
                        src="assets/img/logo/logo-light.png"
                        alt="logo-img"
                      /> */}
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p className="pre-pragraph">
                      "Toprakla buluşan her şey, <br /> doğallığıyla yanınızda.”
                    </p>
                    <div className="social-wrapper social-empact d-flex align-items-center">
                      <a href="#" className="white-clr">
                        <i className="white-clr fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="white-clr">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                            fill="white-clr"
                          />
                        </svg>
                      </a>
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Hizmetler</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Organik Tarım
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Tarım Ürünleri
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Bağlantılar</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="/#">Hakkımızda</Link>
                    </li>
                    <li>
                      <Link to="/#">Hizmetler</Link>
                    </li>
                    <li>
                      <Link to="/#">Blog ve Haberler</Link>
                    </li>
                    <li>
                      <Link to="/#">SSS</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">İletişim</h3>
                  </div>
                  <ul className="list-area list-contact">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        info@ekinlitarim.com
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="link">
                        <i className="fa-solid fa-location-dot"></i>
                        34000 İstanbul, <br /> Esenler
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        <i className="fa-solid fa-phone"></i>
                        +90 (212) 562 4020 <br />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                Tüm Hakları Saklıdır © Mobilbil Endüstri Teknolojileri{" "}
                {new Date().getFullYear()}.
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link to="/#">Şartlar ve Koşullar</Link>
                </li>
                <li>
                  <Link to="/#">Gizlilik Politikası</Link>
                </li>
                <li>
                  <Link to="/#">İletişim</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          src="assets/img/footer/footer-wheat.png"
          alt="img"
          className="footer-wheat position-absolute"
        />
      </footer>
    </>
  );
}
