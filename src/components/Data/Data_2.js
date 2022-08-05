import React from "react"
import "../Data/Data.css"
import Pagination from "../Pagination/Pagination";
import Searchbox_Data2 from "../Searchbox/Search_Data2";

function Data_2() {
  
  const renderData_2 =() => {
    return (
      <React.Fragment>
        <Searchbox_Data2 placeholder="Search the Movie" />
        <Pagination />
      </React.Fragment>
    );
    }

  return (
     <>
    {renderData_2()}
    </>
  )}

export default Data_2