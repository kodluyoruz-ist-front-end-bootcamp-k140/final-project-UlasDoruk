import React from "react";
import "../Data/Data.css";
import Pagination from "../Pagination/Pagination";
import Searchbox_Data3 from "../Searchbox/Search_Data3"

function Data_3() {

  const renderData_3 = () => {
    return (
      <React.Fragment>
        <Searchbox_Data3 placeholder="Search the Moive" />
        <Pagination />
      </React.Fragment>
    );
  };

  return <>{renderData_3()}</>;
}

export default Data_3;
