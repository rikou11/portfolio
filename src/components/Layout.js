import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
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
      <NavBar />
      {children}

      <Footer />
      {/* </ThemeContext.Provider> */}
    </>
  );
};

export default Layout;
