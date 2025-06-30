// Updated Home.jsx with styled hero section and animated images in dark mode
import React from 'react';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen py-10 px-6 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-wide mb-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg text-gray-300">Your one-stop destination for mouth-watering dishes.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[ 
          "https://thumbs.dreamstime.com/b/miniature-workers-helmets-stacking-oversized-cheeseburger-fresh-lettuce-tomatoes-melted-cheese-sesame-bun-playful-363228762.jpg",
          "https://mir-s3-cdn-cf.behance.net/projects/404/229e55156306689.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
          "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
          "https://images.immediate.co.uk/production/volatile/sites/2/2015/03/Prawn-cocktail-ee87e39.jpg?quality=90&resize=700,466",
          "https://t3.ftcdn.net/jpg/01/71/58/86/360_F_171588688_DNG0AqpBzypIDpqnM6jb5r7Rv6JO4H67.jpg",
          "https://media.30seconds.com/tip/md/9-Creative-Healthy-Breakfast-Toast-Ideas-to-Banish-Boring--12746-5401298819-1651335298.jpg"
        ].map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt="Delicious Food"
              className="w-full h-60 object-cover hover:brightness-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
