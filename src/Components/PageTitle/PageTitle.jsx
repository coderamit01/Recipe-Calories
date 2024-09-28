import React from 'react';

const PageTitle = ({title,summery}) => {
  return (
    <div className='md:w-2/4 mx-auto text-center space-y-3'>
      <h2 className='text-3xl font-semibold'>{title}</h2>
      <p>{summery}</p>
    </div>
  );
};

export default PageTitle;