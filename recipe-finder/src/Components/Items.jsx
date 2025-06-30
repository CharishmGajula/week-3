import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetching, fetchdone, selectLoading } from './Loading/LoadingSlice';
import Item from './Item/item';
import Pnf from './Page_not_found/pnf';
export default function Items({ search,category,item}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [data, setData] = useState([]);
  const [notFound,setNotFound]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetching());
      try {
        if(search=="true")
        {
            
        let un_data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
        let data = await un_data.json();
        console.log(data);
        setData(data.meals);
        if(data.meals==null)
        {
            setNotFound(true);
        }
        console.log(data.meals);

        }
        else
        {
        let un_data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let data = await un_data.json();
        console.log(data);
        setData(data.meals);
        if(data.meals==null)
        {
            setNotFound(true);
        }
        console.log(data.meals);
        }
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(fetchdone());
      }
    };
    fetchData();
  }, [category, dispatch,item]);

  if (notFound) {
    return <Pnf />;
  }
  if (isLoading) {
    return (
      <div className="p-6 text-white">
        <h2 className="text-3xl font-bold mb-4">{category} Recipes</h2>
        <ul className="grid grid-cols-2 gap-4">
          {[...Array(10)].map((_, i) => (
            <li key={i} className="bg-gray-800 animate-pulse p-4 rounded-lg shadow-md h-20">
              <div className="bg-gray-600 h-6 w-3/4 rounded"></div>
              <div className="bg-gray-700 h-4 w-1/2 mt-2 rounded"></div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

 return (
  <div className="p-6 bg-gray-950 min-h-screen text-white">
    <h2 className="text-3xl font-bold mb-6 text-yellow-400">Recipes</h2>
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((meal) => (
        <Link to={`/Item/${meal.idMeal}`} key={meal.idMeal}>
          <li className="bg-gray-800 hover:bg-gray-700 transition rounded-xl overflow-hidden shadow-lg cursor-pointer">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-32 w-full object-cover"
            />
            <div className="p-3 text-center text-sm font-medium">{meal.strMeal}</div>
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

}
