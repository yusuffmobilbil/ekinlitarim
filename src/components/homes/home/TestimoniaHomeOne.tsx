import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

export default function TestimoniaHomeOne() {
  return (
    <>
      <section className="testimonial-section testimonial-style1 section-padding">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-4 col-md-4">
              <div
                className="testimonial-thumbv1 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="assets/img/testimonial/ekinlitarim_cer.jpeg"
                  alt="img"
                  className="w-100"
                  style={{ borderRadius: 24 }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
                <Swiper
                  spaceBetween={2}
                  loop={true}
                  slidesPerView={1}
                  speed={1300}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".cmn-prev2",
                    prevEl: ".cmn-next2",
                  }}
                  pagination={{
                    el: ".dot-cmn",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="swiper testimonial-slidewrap01"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="rating d-flex align-items-center justify-content-between">
                        <img src="assets/img/icon/quote-left.svg" alt="icon" />
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Biz, İlçe Tarım ve Orman Müdürlüğü tarafından verilen
                        işletme kayıt belgesine sahip bir işletmeyiz. Bu belge,
                        faaliyetlerimizin resmi ve yasal olarak kayıtlı olduğunu
                        gösterir.
                      </p>
                      {/* <div className="review-man">
                        <img src="assets/img/testimonial/re1.png" alt="img" />
                        <div className="cont">
                          <h3>Haney Cooper</h3>
                          <span>Ceo</span>
                        </div>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="rating d-flex align-items-center justify-content-between">
                        <img src="assets/img/icon/quote-left.svg" alt="icon" />
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Belgemiz sayesinde üretim süreçlerimiz denetlenebilir ve
                        yasalara uygun bir şekilde işliyoruz. Bu, hem
                        güvenilirlik hem de sorunsuz ticari faaliyetlerimiz
                        açısından önemlidir.
                      </p>
                      {/* <div className="review-man">
                        <img src="assets/img/testimonial/re1.png" alt="img" />
                        <div className="cont">
                          <h3>Haney Cooper</h3>
                          <span>Ceo</span>
                        </div>
                      </div> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="rating d-flex align-items-center justify-content-between">
                        <img src="assets/img/icon/quote-left.svg" alt="icon" />
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Belgemiz, ürünlerimizi pazarlarda ve anlaşmalı firmalara
                        sunarken güven sağlıyor ve müşterilerimize kaliteli ve
                        izlenebilir üretim sunduğumuzu garanti ediyor.
                      </p>
                      {/* <div className="review-man">
                        <img src="assets/img/testimonial/re1.png" alt="img" />
                        <div className="cont">
                          <h3>Haney Cooper</h3>
                          <span>Ceo</span>
                        </div>
                      </div> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="dot-cmn"></div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/element/flower-badge.png"
          alt="img"
          className="flower-testimonial d-sm-block d-none"
        />
      </section>
    </>
  );
}
