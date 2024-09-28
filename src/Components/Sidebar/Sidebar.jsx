import PreparingItem from '../PreparingItem/PreparingItem';
import Cooking from '../Cooking/Cooking';

const Sidebar = ({cookItem,handlePrepare,prepareItem}) => {
  return (
    <div className='py-3 border border-gray-200 rounded-2xl'>
      <div className='mb-5'>
        <h3 className='text-2xl font-semibold text-center'>Want To Cook {cookItem.length}</h3>
        <div className='pt-3'>
          <table className="table-auto  border-gray-300 w-full">
            <thead>
              <tr>
                <th className='text-left px-1'></th>
                <th className='text-left px-1'>Name</th>
                <th className='text-left px-1'>Time</th>
                <th className='text-left px-1'>Calories</th>
                <th className='text-left px-1'></th>
              </tr>
            </thead>
            <tbody>
              {
                cookItem.map((item,idx) => (
                  <PreparingItem key={item.id} cookItem={item} idx={idx} handlePrepare={handlePrepare} cooking={prepareItem} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className='text-2xl font-semibold text-center'>Currently cooking {prepareItem.length}</h3>
        <div className='pt-3'>
          <table className="table-auto  border-gray-300 w-full">
            <thead>
              <tr>
                <th className='text-left px-1'></th>
                <th className='text-left px-1'>Name</th>
                <th className='text-left px-1'>Time</th>
                <th className='text-left px-1'>Calories</th>
              </tr>
            </thead>
            <tbody>
              {
                prepareItem.map((item,idx) => (
                  <Cooking key={item.id} prepareItem={item} idx={idx} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;