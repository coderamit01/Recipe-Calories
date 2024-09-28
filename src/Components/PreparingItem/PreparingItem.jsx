
const PreparingItem = () => {
  return (
    <tr className="bg-gray-100 border-b border-slate-400 last-of-type:border-none">
      <td className="text-left px-1 py-2">1</td>
      <td className="text-left px-1 py-2">Grilled Chicken</td>
      <td className="text-left px-1 py-2">30 min</td>
      <td className="text-left px-1 py-2">320</td>
      <td className="text-left px-1 py-2">
      <button className='py-1 px-4 bg-green-500 text-black text-sm font-semibold rounded-full no-underline inline-block'>
      Preparing
    </button>
      </td>
    </tr>
  );
};

export default PreparingItem;