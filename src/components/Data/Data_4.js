import React from "react";
import "../Data/Data.css";
import Pagination from "../Pagination/Pagination";
import Searchbox_Data4 from "../Searchbox/Search_Data4"

function Data_4() {

  const renderData_4 = () => {
    return (
      <React.Fragment>
        <Searchbox_Data4 placeholder="Search the Moive" />
        <Pagination />
      </React.Fragment>
    );
  };

  return <>{renderData_4()}</>;
}

export default Data_4;
