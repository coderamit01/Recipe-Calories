import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
  const [recipes,setRecipes] = useState([]);

  useEffect(() => {
    fetch('../../../public/data.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        recipes.map(item => (
          <Recipe key={item.id} recipes={item} />
        ))
      }
    </div>
  );
};

export default Recipes;