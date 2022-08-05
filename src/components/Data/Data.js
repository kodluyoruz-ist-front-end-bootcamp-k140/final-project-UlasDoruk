import React from "react"
import "../Data/Data.css"
import Pagination from "../Pagination/Pagination";
import Searchbox_Data from "../Searchbox/Searchbox_Data"

function Data() {

  const renderData =() => {
    return (
      <React.Fragment>
       <Searchbox_Data placeholder="Search the Moive"/>
        <Pagination />
      </React.Fragment>
    );
    }

  return (
     <>
    {renderData()}
    </>
  )}

export default Data