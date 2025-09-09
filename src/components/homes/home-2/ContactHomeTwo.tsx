export default function ContactHomeTwo() {
  return (
    <>
      <section className="talking-section overflow-hidden space-top">
        <div className="container">
          <div className="row g-4 align-items-xl-center flex-row-reverse justify-content-between">
            <div className="col-md-6">
              <div className="talking-contact-box">
                <div className="conatact-box common-contact-inner position-relative">
                  <div className="section-title mb-40">
                    <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                      İletişim
                    </h5>
                    <h2>Bize Ulaşın</h2>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row g-xl-4 g-3"
                  >
                    <div className="col-lg-6">
                      <input type="text" placeholder="Ad" />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Konu" />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" placeholder="Mesaj"></textarea>
                    </div>
                    <div className="col-lg-6">
                      <button type="submit" className="cmn-btn text-capitalize">
                        Gönder
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="taklking-cotnact-thumb w-100 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <img
                  src="assets/img/contact/talking-contact.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
