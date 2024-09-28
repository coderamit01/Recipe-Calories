import Hero from '../Components/Hero/Hero';
import PageTitle from '../Components/PageTitle/PageTitle';
import Recipes from '../Components/Recipes/Recipes';
import Sidebar from '../Components/Sidebar/Sidebar';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='py-10'>
        <div className="container mx-auto px-3">
          <PageTitle
          title="Our Recipes"
          summery="Join a top-tier cooking class and master new recipes with expert guidance in a fun, hands-on environment!" />
          <div className='pt-5 md:flex gap-4'>
            <div className='md:w-2/3'>
              <Recipes />
            </div>
            <div className='md:w-1/3
            /3'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;