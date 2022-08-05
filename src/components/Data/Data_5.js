import React from "react";
import "../Data/Data.css";
import Pagination from "../Pagination/Pagination";
import Searchbox_Data5 from "../Searchbox/Search_Data5"

function Data_5() {

  const renderData_5 = () => {
    return (
      <React.Fragment>
        <Searchbox_Data5 placeholder="Search the Moive" />
        <Pagination />
      </React.Fragment>
    );
  };

  return <>{renderData_5()}</>;
}

export default Data_5;
