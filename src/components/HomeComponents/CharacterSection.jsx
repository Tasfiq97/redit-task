import React from 'react';
import starWarsActors from '/assets/actors.jpg';
import { Link, useNavigate } from 'react-router-dom';
const CharacterSection = () => {
  const characters = [
    // Placeholder data (you'll replace this with fetched SWAPI characters)
    { id: '1', name: 'Luke Skywalker', image: '/assets/luke.jpg' },
    { id: '2', name: 'Leia Organa', image: '/assets/leia.jpg' },
    { id: '3', name: 'Darth Vader', image: '/assets/vader.jpg' },
    { id: '4', name: 'Yoda', image: '/assets/yoda.jpg' },
  ];
  const navigate = useNavigate();
  return (
    // <div
    //   style={{ backgroundImage: `url(${starWarsActors})` }}
    //   className="sticky top-0 h-screen bg-cover bg-center z-0 font-orbitron"
    // >
    //   <div className="h-full w-full flex items-center justify-center">
    //     <div className="absolute inset-0 bg-black/40  z-0"></div>
    //     <section className="bg-black text-white py-16 px-6">
    //       <div className="max-w-7xl mx-auto text-center">
    //         <h2 className="text-4xl font-bold mb-6 font-orbitron">Meet the Legends of the Galaxy</h2>
    //         <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
    //           Discover iconic characters from the Star Wars universe. Here are some featured heroes and villains.
    //         </p>

    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //           {characters.map((char) => (
    //             <div
    //               key={char.id}
    //               className="bg-gray-900 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition duration-300"
    //             >
    //               <img src={char.image} alt={char.name} className="w-full h-64 object-cover" />
    //               <div className="p-4 text-center">
    //                 <h3 className="text-xl font-semibold font-orbitron">{char.name}</h3>
    //               </div>
    //             </div>
    //           ))}
    //         </div>

    //         <div className="mt-10">
    //           <Link
    //             to="/characters"
    //             className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
    //           >
    //             Explore All Characters →
    //           </Link>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <div className="sticky top-0 h-screen bg-cover bg-center z-0" style={{ backgroundImage: `url(${starWarsActors})` }}>
      {/* Blurry overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="h-full w-full flex flex-col items-center justify-center px-6 relative z-10">
        <h1 className="text-white text-5xl font-bold mb-8 font-orbitron text-center drop-shadow-lg">
          Meet the Legends
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          {characters.slice(0, 8).map((char) => (
            <div
              key={char.id}
              className="bg-white/10 border border-white/20 rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-md h-full"
            >
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold font-orbitron">{char.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/characters')}
            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg"
          >
            See All Characters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterSection;
