import { Link } from "react-router-dom";
import MobileMenu from "../../layouts/headers/menu/MobileMenu";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Offcanvas({ open, setOpen }: Props) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${open ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <h2>Ekinli Tarım</h2>
                    {/* <img src="assets/img/logo/favcion.png" alt="logo-img" /> */}
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3 mean-container d-xl-none">
                <MobileMenu />
              </div>
              <div className="offcanvas__contact">
                <h4>İletişim</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        34000 İstanbul, Esenler
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:merve.donmezoglu@ekinlitarim.com">
                        <span className="mailto:merve.donmezoglu@ekinlitarim.com">
                          info@ekinlitarim.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Pzt-Cum, 09:00 - 18:00
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+90 (212) 562 4020</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4 mb-4">
                  <Link to="/#" className="cmn-btn">
                    Bize Ulaşın
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <h4>Sosyal Medya</h4>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${open ? "overlay-open" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}
