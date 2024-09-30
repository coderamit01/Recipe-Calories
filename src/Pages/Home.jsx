import { createContext, useState } from 'react';
import Hero from '../Components/Hero/Hero';
import PageTitle from '../Components/PageTitle/PageTitle';
import Recipes from '../Components/Recipes/Recipes';
import Sidebar from '../Components/Sidebar/Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CookContext = createContext(); 
export const HandleContext = createContext();
export const PrepareContext = createContext();

const Home = () => {
  const [cook,setCook] = useState([]);
  const [cooking,setCooking] = useState([]);

  const handleCook = (id, item) => {
    if (!cook.some(cookItem => cookItem.id === id)) {
      const newCook = [...cook, item];
      setCook(newCook);

      }else{
      // Show toast if item is already in the list
      toast.error(`Already in Cook list`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  const handlePrepare = (id,prepare) => {
    // Add item to Cooking state 
    const newCooking = [...cooking,prepare];
    setCooking(newCooking);

    // Remove From Cook State 
    const newCook = cook.filter(item => item.id !== id);
    setCook(newCook);

  }

  return (
    <CookContext.Provider value={[cook]}>
      <PrepareContext.Provider value={[cooking]}>
        <HandleContext.Provider value={{ handleCook, handlePrepare }}>
          <ToastContainer />
          <Hero />
          <div className='py-10'>
            <div className="container mx-auto px-3">
              <PageTitle
                title="Our Recipes"
                summery="Join a top-tier cooking class and master new recipes with expert guidance in a fun, hands-on environment!" 
              />
              <div className='pt-5 md:flex gap-4'>
                <div className='md:w-2/3'>
                  <Recipes />
                </div>
                <div className='md:w-1/3'>
                  <Sidebar prepareItem={cooking} />
                </div>
              </div>
            </div>
          </div>
        </HandleContext.Provider>
      </PrepareContext.Provider>

    </CookContext.Provider>
  );
  
};

export default Home;