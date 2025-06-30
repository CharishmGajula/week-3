import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetching, fetchdone, selectLoading } from '../Loading/LoadingSlice';
export default function Item() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetching());
    async function fetchData() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data_f = await response.json();
        setData(data_f.meals || []);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(fetchdone());
      }
    }
    fetchData();
  }, [id, dispatch]);

  if (isLoading) {
    return <div className="bg-gray-950 min-h-screen text-white text-center pt-20 text-xl">Loading...</div>;
  }

  return (
    <div className="bg-gray-950 min-h-screen py-10 px-4 text-white">
      <div className="max-w-2xl mx-auto">
        {data.map((d, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-xl shadow">
            <Link to="/" className="text-yellow-400 hover:underline block mb-4">← Back</Link>
            <img src={d.strMealThumb} alt={d.strMeal} className="rounded w-full max-h-64 object-cover mb-4 border border-gray-700" />
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">{d.strMeal}</h2>
            <p className="text-sm text-gray-400 mb-4">{d.strCategory} | {d.strArea}</p>
            <p className="text-base text-gray-300 mb-4">{d.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
