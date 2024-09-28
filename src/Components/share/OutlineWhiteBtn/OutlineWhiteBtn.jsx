import React from 'react';
import { Link } from 'react-router-dom';

const OutlineWhiteBtn = ({link,text}) => {
  return (
    <Link to={link} className='py-3 px-7 bg-transparent border border-slate-50 text-white text-base font-semibold rounded-full no-underline inline-block' >
      {text}
    </Link>
  );
};

export default OutlineWhiteBtn;