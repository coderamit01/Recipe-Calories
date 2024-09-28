import { BiSolidHot, BiStopwatch } from 'react-icons/bi';
import GreenBtn from '../share/GreenBtn/GreenBtn';

const Recipe = ({recipes}) => {
  const {name,img,desc,time,calories,ingredients} = recipes;
  return (
    <div className='p-6 border border-gray-200 rounded-2xl'>
      <img src={img} alt={`Image of this title ${name}`} className='w-full rounded-xl pb-6' />
      <h4 className='text-xl font-semibold pb-4'>{name}</h4>
      <p className='text-base pb-4 text-gray-400'>{desc}</p>
      <div className='pt-6 pb-4 border-y border-gray-200'>
        <h5 className='text-lg font-semibold pb-4'>Ingredients: {ingredients.length}</h5>
        <ul className='list-disc list-inside m-0 p-0'>
          {
            ingredients.map((item,id) => (
              <li key={id}>{item}</li>
            ))
          }
         
        </ul>
      </div>
      <div className='flex items-center py-4 space-x-4'>
        <div className='flex items-center space-x-2'>
          <BiStopwatch className='text-gray-400 text-base' />
          <span className='text-gray-400 text-base'>{time} minutes</span>
        </div>
        <div className='flex items-center space-x-2'>
          <BiSolidHot className='text-gray-400 text-base' />
          <span className='text-gray-400 text-base'>{calories} calories</span>
        </div>
      </div>
      <GreenBtn link='#' text="Want To Cook" />
    </div>
  );
};

export default Recipe;