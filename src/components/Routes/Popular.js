import React,{useContext} from 'react';
import FavoriteContext from '../../Context/AddFavorite';
import Searchbox from '../Searchbox/Searchbox';

function Popular() {

  const renderPopular = () => {

    return (
      <React.Fragment>
        <Searchbox placeholder="Search the Popular Movie " />
      </React.Fragment>
    );
  };

  return (
    <>
    {renderPopular()}
    </>
  )
}

export default Popular