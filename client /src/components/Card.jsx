import React from 'react';
import Character from './CharacterCard/Character';
import Pagination from './Pagination';

const Card = ({ data, currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="h-[80vh] md:h-[85vh] lg:h-[90vh]  w-full overflow-auto ">
      {data?.results?.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 space-y-4 text-center">
          <h2 className="text-2xl font-extrabold text-yellow-400 drop-shadow-md">No Characters Found</h2>
          <p className="text-gray-400">
            These aren't the characters you're looking for... <br />
            Try searching again!
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full  mt-2 px-10">
            {data?.results?.map((dt) => (
              <Character key={dt.uid} char={dt} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </div>
  );
};

export default Card;
