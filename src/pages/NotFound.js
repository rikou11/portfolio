import React from "react";
import { useNavigate } from "react-router-dom";
// import tw from "tailwind-styled-components";
// import { getList } from "../services/list";
// import axios from "axios";
const NotFound = () => {
  // const [Json, setJson] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   setTimeout(() => {
  //     axios.get("http://localhost/portfolio/getPosts.php").then((res) => {
  //       if (mounted) {
  //         setJson(res.data);
  //         console.log(Json);
  //       }
  //     });

  //     return () => (mounted = false);
  //   }, 3000);

  //   // axios.post("http://localhost/portfolio/postdb.php/?", {
  //   //   title: "jessie",
  //   //   body: "12:00",
  //   //   author: "milk",
  //   // });
  // }, [Json]);

  // const createPost = () => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost/portfolio/postPosts.php?",
  //     data: { title: "hello", author: "hwjwj", body: "asas" },
  //   }).then((response) => {
  //     console.log("Status: ", response.status);
  //     console.log("Data: ", response.data);
  //   });
  // };
  const navigate = useNavigate();
  return (
    <div className=" bg-[#B9C9EA] md:h-[570px]  font-oxygen  ">
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
              <p className="text-[#FA96AD] text-sm md:text-base  uppercase mb-4">
                Error 404
              </p>
              <h1 className="text-gray-900  text-2xl md:text-5xl font-oxygen text-center sm:text-left mb-2">
                Page not found
              </h1>

              <p className="text-white md:text-xl text-center sm:text-left mb-8">
                The page you’re looking for doesn’t exist.
              </p>
              {/* <div>
                {Json.map((i) => {
                  return (
                    <ul key={i.id}>
                      <li>{i.author}</li>
                    </ul>
                  );
                })}
              </div>

              <button className=" bg-[#FA96AD]" onClick={() => createPost()}>
                post
              </button> */}
              <button
                onClick={() => navigate("/")}
                className=" w-32 h-32 rounded-full text-white border-2 shadow-2xl transition duration-0 md:duration-300 border-white hover:border-gray-900 inline-block bg-[#FA96AD] hover:bg-[#B9C9EA] focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold text-center  outline-none  px-8 py-3"
              >
                Go home
              </button>
            </div>

            <div className="h-80 md:h-[450px] bg-gray-100 overflow-hidden shadow-lg rounded-lg relative">
              <img
                src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                loading="lazy"
                alt="Phot"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

// eslint-disable-next-line no-unused-vars
// const Container = tw.div`
//   flex
//   items-center
//   justify-center
//   flex-col
//   w-full
//   bg-indigo-600
//   text-white
//   hover:bg-yellow-400
//   transition duration-300
// `;
