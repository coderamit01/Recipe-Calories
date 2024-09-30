import React, { useContext } from 'react';
import { CookContext, PrepareContext } from '../../Pages/Home';

const Cooking = ({cookingItem,idx}) => {
  const [cooking] = useContext(PrepareContext);
  const {name,time,calories} = cookingItem;
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