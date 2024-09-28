import React from 'react';
import { Link } from 'react-router-dom';

const GreenBtn = ({link,text}) => {
  return (
    <Link to={link} className='py-3 px-7 bg-green-500 text-black text-base font-semibold rounded-full no-underline inline-block'>
      {text}
    </Link>
  );
};

export default GreenBtn;