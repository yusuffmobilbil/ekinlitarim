import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home";
import HomeTwo from "./components/homes/home-2";
import HomeThree from "./components/homes/home-3";
import About from "./components/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import Gallery from "./components/gallery";
import GalleryDetails from "./components/gallery-details";
import Blog from "./components/blog";
import BlogDetails from "./components/blog-details";
import ProductList from "./components/product-list";
import ProductDetails from "./components/product-details";
import Faq from "./components/faq";
import Contact from "./components/contact";
import NotFound from "./error";

const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/about", element: <About /> },
  { path: "/service", element: <Service /> },
  { path: "/service-details", element: <ServiceDetails /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/gallery-details", element: <GalleryDetails /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog-details", element: <BlogDetails /> },
  { path: "/product-list", element: <ProductList /> },
  { path: "/product-details", element: <ProductDetails /> },
  { path: "/faq", element: <Faq /> },
  { path: "/contact", element: <Contact /> },

  //  not found page
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
