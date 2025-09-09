 

import { Link } from "react-router-dom";

type BlogPost = {
  id: number;
  imgSrc: string;
  date: string;
  commentsCount: number;
  author: string;
  title: string;
  description: string;
  delay: string; // for animation delay
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

export default function BlogArea() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      imgSrc: "assets/img/blog/blog-big01.jpg",
      date: "22 jan",
      commentsCount: 5,
      author: "admin",
      title: "Farming for a Better Future",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. a Imperdiet massa turpis sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum facilisis sem. Imperdiet best destination in the world",
      delay: ".2s",
    },
    {
      id: 2,
      imgSrc: "assets/img/blog/blog-big02.jpg",
      date: "22 jan",
      commentsCount: 5,
      author: "admin",
      title: "Cultivate Success with Agriculture",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. a Imperdiet massa turpis sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum facilisis sem. Imperdiet best destination in the world",
      delay: ".3s",
    },
    {
      id: 3,
      imgSrc: "assets/img/blog/blog-big03.jpg",
      date: "22 jan",
      commentsCount: 5,
      author: "admin",
      title: "Sow the Seeds of Prosperity",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. a Imperdiet massa turpis sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum facilisis sem. Imperdiet best destination in the world",
      delay: ".4s",
    },
    {
      id: 4,
      imgSrc: "assets/img/blog/blog-big04.jpg",
      date: "22 jan",
      commentsCount: 5,
      author: "admin",
      title: "From Farm to Table, Agriculture Matters",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. a Imperdiet massa turpis sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum facilisis sem. Imperdiet best destination in the world",
      delay: ".5s",
    },
    {
      id: 5,
      imgSrc: "assets/img/blog/blog-big05.jpg",
      date: "22 jan",
      commentsCount: 5,
      author: "admin",
      title: "Planting the Seeds of Innovation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. a Imperdiet massa turpis sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi the ultricies dictum facilisis sem. Imperdiet best destination in the world",
      delay: ".6s",
    },
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

  const tags = [
    "CropCare Pro",
    "Blossoms",
    "Farm",
    "Harmony",
    "Nature",
    "Green",
  ];

  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center"> 
            <div className="col-lg-8">
              <div className="blog-details-big pe-xl-2">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="blog-details-leftitem wow fadeInUp"
                    data-wow-delay={post.delay}
                  >
                    <div className="thumb position-relative">
                      <img src={post.imgSrc} alt="img" />
                      <span className="date-badge">{post.date}</span>
                    </div>
                    <div className="content">
                      <ul className="comment-inner">
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-comments"></i> Comments ({post.commentsCount.toString().padStart(2, "0")})
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-user"></i> By {post.author}
                          </a>
                        </li>
                      </ul>
                      <Link to="/blog-details" className="titles">
                        {post.title}
                      </Link>
                      <p>{post.description}</p>
                      <Link to="/blog-details" className="cmn-btn primary-border">
                        Read More
                        <i className="fa-solid fa-arrow-right p1-clr"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="blog-right-bar mt-lg-0 mt-4">
                {/* Search Widget */}
                <div className="box common-style-box wow fadeInUp" data-wow-delay=".2s">
                  <div className="wid-title wow fadeInLeft" data-wow-delay=".3s">
                    <h3>Search</h3>
                  </div>
                  <div className="search-widget" data-aos="zoom-in" data-aos-duration="1400">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        placeholder="Search here..."
                        aria-label="Search blog posts"
                      />
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
                    {tags.map((tag, index) => (
                      <Link key={index} to="/blog-details">
                        {tag}
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
