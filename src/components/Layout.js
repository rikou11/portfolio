import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "./ScrollTop";
// import { Nav } from "./nav";


// export const ThemeContext = React.createContext();
const Layout = ({ children }) => {

  // const [DarkTheme, setDarkTheme] = useState(true);



  return (
    <>
      {/* <ThemeContext.Provider value={DarkTheme} > */}
      {/* <button onClick={() => {
          console.log(DarkTheme)
          setDarkTheme(prevDarkTheme => !prevDarkTheme);
        }}>dark theme</button> */}

      {/* <Nav /> */}
      {/* <ScrollToTop/> */}
      <NavBar />
      {/* <AnimatedCursor innerSize={8}
        outerSize={16}
        color="17, 163, 231"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4} /> */}
      {children}


      <Footer />
      {/* </ThemeContext.Provider> */}
    </>
  );
};

export default Layout;
