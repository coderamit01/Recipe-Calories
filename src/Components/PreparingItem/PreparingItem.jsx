
const PreparingItem = ({cookItem,idx,handlePrepare}) => {
  const {id,name,time,calories} = cookItem;
  return (
    <tr className="bg-gray-100 border-b border-slate-400 last-of-type:border-none">
      <td className="text-left px-1 py-2">{idx + 1}</td>
      <td className="text-left px-1 py-2">{name}</td>
      <td className="text-left px-1 py-2">{time} min</td>
      <td className="text-left px-1 py-2">{calories}</td>
      <td className="text-left px-1 py-2">
      <button onClick={() =>handlePrepare(id,cookItem)} type="button" className='py-1 px-4 bg-green-500 text-black text-sm font-semibold rounded-full no-underline inline-block'>
      Preparing
    </button>
      </td>
    </tr>
  );
};

export default PreparingItem;