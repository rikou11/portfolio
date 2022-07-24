import React from "react";
// import "./Latest.css";
import projects from "./projects.json";

const LatestProject = () => {
  const data = projects;

  const updatedJSON =   {
      name: "Infodz",
      type: "Web App",
      discription:
        "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delenitidistinctio placeat mollitia fugit. Magni impedit quibusdam iusto, quidem illo animi!",
      picture: "",
    } ;
 
  
  // const au =  writeJsonFile(projects,updatedJSON );
  // console.log(au);
  return (
    <div className="latest-container">
      {/* project 1 */}

      {/* project 2 */}
      {/* project 3 */}
    </div>
  );
};

export default LatestProject;
