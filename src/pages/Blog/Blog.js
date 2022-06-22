import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import useFetch from "../../hooks/useFetch";
import NotFound from "../NotFound";
import Navbar from "./Layout/Navbar";

const Blog = () => {
  const { loading, data, error } = useFetch("http://localhost:1337/api/blogs");

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return (
      <div>
        <NavBar />
        <NotFound />
        <Footer />
      </div>
    );
  }
  return (
    <div className="h-[2000px] box-border">
      <Navbar />
      <div className="w-full flex justify-center font-oxygen ">
        {" "}
        <div className="xl:w-9/12 md:w-10/12 w-11/12 md:mt-14 mt-7 mx-0 grid grid-cols-1 gap-10">
          <h1 className=" text-6xl font-bold mb-5 font-oxygen text-center z-50">
            Blog
          </h1>
          {data.map((i) => {
            return (
              <div
                className="grid grid-cols-1 gap-6 place-content-center lg:pl-40 md:pl-20	"
                key={i.id}
              >
                <div className=" cursor-pointer hover:scale-105 transition duration-200 lg:border-0 md:border-0 border-2 lg:shadow-none md:shadow-none shadow-lg p-2 h-fit rounded-xl grid md:grid-cols-2 gap-8 grid-cols-1 lg:w-3/4 md:h-5/6 w-full ">
                  <img
                    className=" shadow-xl h-max-52  w-auto rounded-lg object-cover object-center "
                    src={i.attributes.url_img}
                    alt=""
                  />
                  <span
                    className="grid grid-flow-row  lg:h-40
               md:h-36 md:gap-4 lg:gap-6"
                  >
                    <h2
                      className={
                        " lg:text-lg md:text-lg text-base uppercase " +
                        i.attributes.title_color
                      }
                    >
                      {i.attributes.blog_type}
                    </h2>
                    <p className="lg:text-2xl text-xl font-bold">
                      {i.attributes.title}
                    </p>
                    <span className="grid grid-cols-1 gap-3">
                      <p className="lg:text-base text-sm text-gray-400">
                        {i.attributes.text.substring(0, 70)}... &nbsp;
                        <Link
                          to="_#"
                          className="text-blue-400 hover:underline hover:decoration-cyan-200 text-sm"
                        >
                          Read More
                        </Link>
                      </p>
                      <span className="text-gray-400 lg:text-base text-sm">
                        {i.attributes.publishedAt.substring(0, 10)}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
