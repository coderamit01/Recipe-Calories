import Bg from '../../assets/images/slider-bg.png';
import GreenBtn from '../share/GreenBtn/GreenBtn';
import OutlineWhiteBtn from '../share/OutlineWhiteBtn/OutlineWhiteBtn';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto px-3">
        <div className='h-[80vh] bg-center bg-cover bg-no-repeat rounded-lg flex items-center' style={{backgroundImage: `url(${Bg})`}}>
          <div className='md:w-2/4 mx-auto space-y-3 text-center'>
            <h1 className='text-4xl font-bold text-white'>Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-white'>Experience an exceptional cooking class where you'll learn delicious recipes and culinary techniques from expert chefs in a hands-on setting.</p>
            <div className="flex items-center space-x-4 justify-center">
              <GreenBtn link='#' text="Explore Now" />
              <OutlineWhiteBtn link='#' text="Our Feedback"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;