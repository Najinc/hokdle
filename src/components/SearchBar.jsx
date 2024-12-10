import React, { useState, useEffect } from 'react';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        const results = data.filter(hero =>
          hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(results);
      } else {
        setFilteredData([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, data]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (hero) => {
    setSelectedHero(hero);
    setSearchTerm(''); // Effacer la barre de recherche après la sélection
    setFilteredData([]);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <input
        type="text"
        placeholder="Search for a hero..."
        value={searchTerm}
        onChange={handleChange}
        className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4D28F] focus:border-[#F4D28F] w-64
                   transition-all ease-out delay-100 hover:border-[#F4D28F] hover:ring-2 hover:ring-[#F4D28F]"
      />
      <ul className={`mt-2 w-64 max-h-40 overflow-y-auto border border-gray-300 rounded-md shadow-lg bg-white ${filteredData.length ? '' : 'hidden'}`}>
        {filteredData.map(hero => (
          <li
            key={hero.uuid}
            onClick={() => handleSelect(hero)}
            className="cursor-pointer p-2 border-b last:border-b-0 border-gray-200 hover:bg-[#F4D28F] flex items-center"
          >
            <img src={`/assets/img/heroes_icon/${hero.icon}`} alt={`${hero.name} icon`} className="w-6 h-6 mr-2" />
            <span className="text-[#050505]">{hero.name}</span>
          </li>
        ))}
      </ul>
      {selectedHero && (
        <div className="mt-4 text-white text-center">
          <h2 className="text-xl">{selectedHero.name}</h2>
          <p><strong>Region:</strong> {selectedHero.region}</p>
          <p><strong>Lane:</strong> {selectedHero.lane.join(', ')}</p>
          <p><strong>Skills:</strong> {selectedHero.skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
