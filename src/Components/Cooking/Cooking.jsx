import React from 'react';

const Cooking = ({prepareItem,idx}) => {
  const {name,time,calories} = prepareItem;
  return (
    <tr className="bg-gray-100 border-b border-slate-400 last-of-type:border-none">
      <td className="text-left px-1 py-2">{idx + 1}</td>
      <td className="text-left px-1 py-2">{name}</td>
      <td className="text-left px-1 py-2">{time} min</td>
      <td className="text-left px-1 py-2">{calories}</td>
    </tr>
  );
};

export default Cooking;