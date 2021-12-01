import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import UnivDetails from '../components/UnivDetails';


const Details = () => {
  const [univ, setUniv] = useState({});
//   const { univName } = useParams();

  useEffect(() => {

    fetch('http://universities.hipolabs.com/search?country=United+States')
        .then(response => response.json())
        .then(data =>setUniv(data));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <UnivDetails univ={univ} />
      <Footer />
    </>
  );
}

export default Details;