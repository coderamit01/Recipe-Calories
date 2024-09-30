import { useContext } from "react";
import { CookContext, HandleContext } from "../../Pages/Home";

const PreparingItem = ({prepareItem,idx}) => {
  const {id,name,time,calories} = prepareItem;
  const {handlePrepare} = useContext(HandleContext);

  return (
    <tr className="bg-gray-100 border-b border-slate-400 last-of-type:border-none">
      <td className="text-left px-1 py-2">{idx + 1}</td>
      <td className="text-left px-1 py-2">{name}</td>
      <td className="text-left px-1 py-2">{time} min</td>
      <td className="text-left px-1 py-2">{calories}</td>
      <td className="text-left px-1 py-2">
      <button onClick={() =>handlePrepare(id,prepareItem)} type="button" className='py-1 px-4 bg-green-500 text-black text-sm font-semibold rounded-full no-underline inline-block'>
      Preparing
    </button>
    {console.log(id)}
      </td>
    </tr>
  );
};

export default PreparingItem;