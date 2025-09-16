import { Link } from "react-router-dom";

export default function AboutHomeTwo() {
  return (
    <>
      <section className="about-section style-v01 space-top pb-60 mb-3 white-bg">
        <div className="container">
          <div className="row g-4 align-items-lg-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div
                className="about-thumv02 position-relative w-100 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <img
                  src="assets/img/about/uzum.webp"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Neden Ekinli Tarım?
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Doğanın cömertliğini tabağınıza getiriyoruz
                  </h2>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Ekinli Tarım, köklerini Bursa’nın bereketli topraklarından
                    alan, doğaya saygılı ve sürdürülebilir üretim anlayışıyla
                    kurulmuş bir tarım girişimidir. Bizim için tarım sadece
                    üretim değil; aynı zamanda toprağa, doğaya ve geleceğe
                    duyulan bir sorumluluktur.
                  </p>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Ürünlerimizi yetiştirirken geleneksel yöntemlerle modern
                    tarım tekniklerini bir araya getiriyor, her adımda doğallığı
                    ve kaliteyi ön planda tutuyoruz. Vakumlu balkabağı, coğrafi
                    işaretli Bursa siyah inciri, hünnap, enginar, sofralık
                    zeytin ve soğuk sıkım zeytinyağımızı özenle üretiyor,
                    hijyenik koşullarda paketliyor ve tüketiciye en sağlıklı
                    haliyle sunuyoruz.
                  </p>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Amacımız yalnızca ürün sunmak değil; tarımın doğallığını,
                    mevsiminde beslenmenin önemini ve sürdürülebilirliği topluma
                    aktarmaktır. Bu nedenle üretim sürecimizin her aşamasında
                    şeffaflık ilkesini benimsiyor, hem iç pazarda hem de
                    uluslararası alanda güvenilir bir marka olmayı hedefliyoruz.
                    Ekinli Tarım olarak, toprağın bereketini sofralara taşıyor;
                    doğadan geleni, doğallığını bozmadan sizlere ulaştırıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
