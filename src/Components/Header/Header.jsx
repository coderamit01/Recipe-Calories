import { BiSearch, BiSolidUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='py-4'>
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className='text-3xl font-bold'>Recipe Calories</h2>
          </div>
          <div className='space-x-4'>
            <Link to="#" className='hover:font-semibold'>Home</Link>
            <Link to="#" className='hover:font-semibold'>Recipes</Link>
            <Link to="#" className='hover:font-semibold'>About</Link>
            <Link to="#" className='hover:font-semibold'>Search</Link>
          </div>
          <div className="flex items-center">
            <div className='relative bg-slate-100 py-1 ps-4 rounded-3xl me-3'>
              <input type="text" name="" id="" placeholder='Search' className='bg-transparent outline-none border-none ps-5 py-1' />
              <BiSearch className='absolute top-3 text-slate-400' />
            </div>
            <Link to="" className='p-2 bg-green-500 rounded-full' ><BiSolidUserCircle className='text-xl' /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;