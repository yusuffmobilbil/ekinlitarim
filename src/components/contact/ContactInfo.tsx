export default function ContactInfo() {
  return (
    <>
      <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Adresimiz</h5>
                  <a href="#" className="pra">
                    34000 İstanbul, <br /> Esenler
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Bizi arayın</h5>
                  <a href="#" className="pra">
                    +90 (212) 562 4020
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Mesaj gönderin</h5>
                  <a href="#" className="pra">
                    info@ekinlitarim.com <br />
                    merve.donmezoglu@ekinlitarim.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
