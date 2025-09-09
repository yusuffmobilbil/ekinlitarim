
 
import { Link } from 'react-router-dom';  

import masonry_1 from "/assets/img/gallery/gl1.jpg";
import masonry_2 from "/assets/img/gallery/gl2.jpg";
import masonry_3 from "/assets/img/gallery/gl3.jpg";
import masonry_4 from "/assets/img/gallery/gl4.jpg";
import masonry_5 from "/assets/img/gallery/gl5.jpg"; 
 

const masonry_data = [
  {
    img: masonry_1,
    cls: 7,
  },
  {
    img: masonry_2,
    cls: 5,
  },
]
const masonry_data2 = [
  { img: masonry_3 },
  { img: masonry_4 },
]
const masonry_data3 = [
  { img: masonry_5 },
]



export default function GalleryHomeOne() {
 


  return (
    <>

      <section className="gallery-section p100-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  OUR GALLARY
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Bringing natures bounty to your plate
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-lg-4 g-3 justify-content-center">
            {masonry_data.map((item, i) => (
              <div key={i} className={`col-md-${item.cls} col-sm-${item.cls}`}>
                <a
                  style={{ cursor: "pointer" }} 
                  className="gallery-com-thumb first-item img-popup w-100 round20">
                  <img src={item.img} alt="img" className="round20" />
                </a>
              </div>

            ))}

            <div className="d-flex flex-sm-nowrap flex-wrap justify-content-between gap-lg-4 gap-3">
              {masonry_data2.map((item, i) => (
                <a key={i}
                  style={{ cursor: "pointer" }} 
                  className="gallery-com-thumb secound img-popup w-100 round20">
                  <img src={item.img} alt="img" className="round20" />
                </a>

              ))}

              {masonry_data3.map((item, i) => (
                <div key={i} className="d-grid gap-lg-4 gap-3">
                  <a
                    style={{ cursor: "pointer" }} 
                    className="gallery-com-thumb thard img-popup w-100 round20">
                    <img src={item.img} alt="img" className="round20" />
                  </a>
                  <Link to="/gallery" className="cmn-btn d-center">
                    View all Project
                  </Link>
                </div>

              ))}
            </div>

          </div>
        </div>
      </section>

       


    </>
  )
}
