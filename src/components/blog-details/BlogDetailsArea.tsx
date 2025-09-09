 

import { Link } from "react-router-dom";
import NiceSelect from "../../ui/NiceSelect";

type Tag = {
  id: number;
  text: string;
  link: string;
};

type Category = {
  id: number;
  title: string;
  iconClass: string;
  link: string;
};

type LatestBlog = {
  id: number;
  imgSrc: string;
  date: string;
  title: string;
  link: string;
};

type SocialLink = {
  id: number;
  href: string;
  iconClass?: string;
  svgPath?: string;
  ariaLabel: string;
};

export default function BlogDetailsArea() {
  // Handlers
  const selectHandler = (e: React.MouseEvent<HTMLDivElement> | any) => {
    console.log(e);
  };

  // Data arrays

  const tags: Tag[] = [
    { id: 1, text: "Care", link: "/blog-details" },
    { id: 2, text: "Beauty", link: "/blog-details" },
    { id: 3, text: "Good", link: "/blog-details" },
  ];

  const categories: Category[] = [
    { id: 1, title: "Evergreen Lawn Care", iconClass: "fa-solid fa-minus", link: "/blog-details" },
    { id: 2, title: "Petal Perfect Farming", iconClass: "fa-solid fa-minus", link: "/blog-details" },
    { id: 3, title: "Blissful Botanicals", iconClass: "fa-solid fa-minus", link: "/blog-details" },
    { id: 4, title: "The Farm Guru", iconClass: "fa-solid fa-minus", link: "/blog-details" },
    { id: 5, title: "Serene Scape Design", iconClass: "fa-solid fa-minus", link: "/blog-details" },
  ];

  const latestBlogs: LatestBlog[] = [
    {
      id: 1,
      imgSrc: "assets/img/blog/details-small1.png",
      date: "Jan 10,2024",
      title: "Planting the Seeds of Innovation",
      link: "/blog-details",
    },
    {
      id: 2,
      imgSrc: "assets/img/blog/details-small2.png",
      date: "Jan 10,2024",
      title: "Discover the Potential of Agriculture",
      link: "/blog-details",
    },
    {
      id: 3,
      imgSrc: "assets/img/blog/details-small13.png",
      date: "Jan 10,2024",
      title: "Nourish Your Life with Agriculture",
      link: "/blog-details",
    },
  ];

  const socialLinks: SocialLink[] = [
    { id: 1, href: "#", iconClass: "white fa-brands fa-pinterest-p", ariaLabel: "Pinterest" },
    { id: 2, href: "#", iconClass: "white fa-brands fa-linkedin-in", ariaLabel: "LinkedIn" },
    {
      id: 3,
      href: "#",
      ariaLabel: "Custom SVG",
      svgPath:
        "M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z",
    },
    { id: 4, href: "#", iconClass: "white fab fa-facebook-f", ariaLabel: "Facebook" },
  ];

  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center">
            {/* Main blog content */}
            <div className="col-lg-8">
              <div className="blog-post-details">
                <div className="explore-details-content">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Explore the beauty of nature
                  </h2>
                  <ul className="comment-inner wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user"></i> By admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-folder-open"></i> Category
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-calendar-days"></i> October 19, 2024
                      </a>
                    </li>
                  </ul>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece
                    of classical the a literature from 45 BC making it over 2000 years old. Richard McClintock a
                    Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                  </p>
                  <p className="mb-40 wow fadeInUp" data-wow-delay=".5">
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece
                    of classical a the a literature from 45 BC making it over 2000 years old. Richard McClintock
                    a Latin professor
                  </p>
                  <div className="thumb w-100 mb-40 wow fadeInUp" data-wow-delay=".4s">
                    <img src="assets/img/blog/bd1.jpg" alt="img" className="w-100" />
                  </div>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".5s">
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece
                    of classical the a literature from 45 BC making it over 2000 years old. Richard McClintock a
                    Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                  </p>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".6s">
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece
                    of classical the a literature from 45 BC making it over 2000 years old. Richard McClintock
                  </p>
                  <div className="quote-box mb-40 wow fadeInUp" data-wow-delay=".7s">
                    <img src="assets/img/icon/quote-leftp2.svg" alt="img" />
                    <p>
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page a when looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters as opposed the maon
                      design
                    </p>
                    <h5>Skib Al sakin</h5>
                  </div>
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Keep your free time free!
                  </h3>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a
                    piece of classical the literature from 45 BC making it over 2000 years old. Richard
                    McClintock a Latin professoContrary to and popular belief Lorem Ipsum is not simply
                    random text It has roots in a piece
                  </p>
                  <div className="blog-single-thumb mb-30 wow fadeInUp" data-wow-delay=".5s">
                    <div className="thumb w-100">
                      <img src="assets/img/blog/bd-single1.jpg" alt="img" className="w-100" />
                    </div>
                    <div className="thumb w-100">
                      <img src="assets/img/blog/bd-single2.jpg" alt="img" className="w-100" />
                    </div>
                  </div>
                  <p className="mb-20 wow fadeInUp" data-wow-delay=".3s">
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a
                    piece of classical the literature from 45 BC making it over 2000 years old. Richard
                    McClintock a Latin professoContrary to and popular belief Lorem Ipsum is not simply
                    random text It has roots in a piece
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".7s">
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a
                    piece of classical the literature from 45 BC making it over 2000 years old. Richard
                    McClintock
                  </p>
                </div>

                {/* Tags and Social */}
                <div className="social-tag-wrapper wow fadeInUp" data-wow-delay=".4s">
                  <div className="left-tag">
                    <h5>Tags:</h5>
                    <ul className="tag-list">
                      {tags.map((tag) => (
                        <li key={tag.id}>
                          <Link to={tag.link}>{tag.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="social-wrapper d-flex align-items-center">
                    {socialLinks.map((social) =>
                      social.iconClass ? (
                        <a
                          key={social.id}
                          href={social.href}
                          className={social.iconClass}
                          aria-label={social.ariaLabel}
                        />
                      ) : (
                        <a
                          key={social.id}
                          href={social.href}
                          aria-label={social.ariaLabel}
                          className="white"
                        >
                          <svg
                            width="11"
                            height="12"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d={social.svgPath} fill="white" />
                          </svg>
                        </a>
                      )
                    )}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="component-arrows mt-40 mb-40 wow fadeInUp" data-wow-delay=".5s">
                  <div className="arrow-item">
                    <Link to="/blog-details" className="arrows">
                      <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <h5>
                      More Care <br /> places
                    </h5>
                  </div>
                  <span className="cusline"></span>
                  <div className="arrow-item">
                    <h5 className="text-end">
                      Mastering <br /> the Art
                    </h5>
                    <a href="#" className="arrows active">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Reply box */}
                <div className="replay-single-box wow fadeInUp" data-wow-delay=".6s">
                  <img src="assets/img/blog/reply-kishan.png" alt="img" className="krishana" />
                  <div className="content">
                    <div className="man-info-area mb-20">
                      <div className="man-info">
                        <h3>Kristin Watson</h3>
                        <span>December 23,2024 at 8:50 P.M</span>
                      </div>
                      <button className="replys" type="button">
                        Reply
                      </button>
                    </div>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                      piece of classical Latin literature from 45 BC, making it over 2000
                    </p>
                  </div>
                </div>

                {/* Reply form */}
                <div className="who-contact-wrap mt-60 mb-60 wow fadeInUp" data-wow-delay=".7s">
                  <h3 className="mb-40 text-capitalize">Leave A Reply</h3>
                  <form onSubmit={(e) => e.preventDefault()} className="row g-xl-4 g-3">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="col-lg-6">
                      <input type="number" placeholder="Your Number" />
                    </div>
                    <div className="col-lg-6">
                      <NiceSelect
                        options={[
                          { value: "00", text: "Your Area" },
                          { value: "01", text: "Us" },
                          { value: "02", text: "Uk" },
                          { value: "04", text: "Turky" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        placeholder="Select an option"
                        name="myNiceSelect"
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" rows={4} placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="cmn-btn">
                        Sent Now
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* You May Also Like */}
                <div className="maybe-liking wow fadeInUp" data-wow-delay=".8s">
                  <h3 className="mb-40">You May Also Like</h3>
                  <div className="thumb mb-30">
                    <img src="assets/img/blog/bd2.jpg" alt="img" />
                  </div>
                  <h3 className="p900-clr mb-20">Transform your outdoor space into a botanical</h3>
                  <p>
                    Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a
                    piece of classical the literature from 45 BC making it over 2000 years old. Richard
                    McClintock
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog-right-bar mt-lg-0 mt-4">
                {/* Search Box */}
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".2s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Search</h3>
                  </div>
                  <div className="search-widget" data-aos="zoom-in" data-aos-duration="1400">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Search here..." aria-label="Search blog posts" />
                      <button type="submit" aria-label="Submit search">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Categories */}
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".3s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Categories</h3>
                  </div>
                  <div className="category" data-aos="fade-down" data-aos-duration="1600">
                    <ul className="d-grid gap-xxl-3 gap-3">
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <Link to={cat.link}>
                            <i className={cat.iconClass}></i>
                            {cat.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Latest Blogs */}
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".4s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Latest Blogs</h3>
                  </div>
                  <div className="recent-postwrap">
                    {latestBlogs.map((blog) => (
                      <div key={blog.id} className="recent-items">
                        <div className="recent-thumb">
                          <img src={blog.imgSrc} alt="img" />
                        </div>
                        <div className="recent-content">
                          <span className="d-flex align-items-center gap-2">
                            <i className="fa-solid fa-calendar-days"></i> {blog.date}
                          </span>
                          <Link to={blog.link}>{blog.title}</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".5s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Tags</h3>
                  </div>
                  <div className="tagwrap">
                    {["CropCare Pro", "Blossoms", "Farm", "Harmony", "Nature", "Green"].map((tagText, i) => (
                      <Link key={i} to="/blog-details">
                        {tagText}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
