import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [targetHero, setTargetHero] = useState(null);

  useEffect(() => {
    const newHero = data[Math.floor(Math.random() * data.length)];
    setTargetHero(newHero);
  }, [data]);

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

  const compareHeroes = (hero, targetHero) => {
    const comparison = {
      region: hero.region === targetHero.region 
        ? 'correct' 
        : 'incorrect',
      
      lane: hero.lane.some(l => targetHero.lane.includes(l)) 
        ? (hero.uuid === targetHero.uuid ? 'correct' : 'partial')
        : 'incorrect',
      
      skillset: hero.skillset === targetHero.skillset 
        ? 'correct' 
        : 'incorrect',
      
      height: hero.height === targetHero.height 
        ? 'correct' 
        : (hero.height.includes(targetHero.height) || targetHero.height.includes(hero.height))
          ? (hero.uuid === targetHero.uuid ? 'correct' : 'close')
          : 'incorrect'
    };
    return comparison;
  };

  const handleSelect = (hero) => {
    const alreadyAttempted = attempts.some(attempt => attempt.hero.uuid === hero.uuid);
    
    if (alreadyAttempted) {
      return;
    }

    setSearchTerm('');
    setFilteredData([]);

    const comparison = compareHeroes(hero, targetHero);
    const newAttempt = { hero, comparison };
    
    setAttempts(prev => [...prev, newAttempt]);

    if (hero.uuid === targetHero.uuid) {
      setIsCorrect(true);
      setShowConfetti(true);
      
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  };

  const getComparisonColor = (comparisonType) => {
    switch (comparisonType) {
      case 'correct': return 'bg-green-500';
      case 'partial': return 'bg-yellow-500';
      case 'close': return 'bg-orange-500';
      default: return 'bg-red-500';
    }
  };

  const resetGame = () => {
    const newHero = data[Math.floor(Math.random() * data.length)];
    setTargetHero(newHero);
    
    setAttempts([]);
    setIsCorrect(false);
    setShowConfetti(false);
    setSearchTerm('');
    setFilteredData([]);
  };

  const renderAttempt = (attempt) => {
    const characteristics = [
      { key: 'region', label: 'Region' },
      { key: 'lane', label: 'Lane' },
      { key: 'skillset', label: 'Skillset' },
      { key: 'height', label: 'Height' }
    ];

    return (
      <div className="w-full grid grid-cols-5 gap-2 mb-2 items-center">
        <div className="col-span-1 flex items-center h-16 px-2">
          <img 
            src={`/assets/img/heroes_icon/${attempt.hero.icon}`} 
            alt={attempt.hero.name} 
            className="w-12 h-12 rounded-full mr-2"
          />
          <span className="text-white truncate">{attempt.hero.name}</span>
        </div>
        {characteristics.map((char) => {
          const value = char.key === 'lane' 
            ? attempt.hero[char.key].join(', ') 
            : attempt.hero[char.key];
          
          return (
            <div 
              key={char.key} 
              className={`col-span-1 p-2 text-center text-white h-16 flex items-center justify-center ${getComparisonColor(attempt.comparison[char.key])}`}
            >
              {value}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full">
      {targetHero ? (
        <div className="w-full max-w-2xl">
          {isCorrect && (
            <button 
              onClick={resetGame}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Play Again
            </button>
          )}

          {!isCorrect && (
            <input
              type="text"
              placeholder="Type a hero name..."
              value={searchTerm}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
            />
          )}

          {filteredData.length > 0 && !isCorrect && (
            <ul className="absolute z-10 bg-white border border-gray-300 rounded-md w-64 max-h-60 overflow-y-auto">
              {filteredData.map(hero => (
                <li
                  key={hero.uuid}
                  onClick={() => handleSelect(hero)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                >
                  <img 
                    src={`/assets/img/heroes_icon/${hero.icon}`} 
                    alt={hero.name} 
                    className="w-8 h-8 mr-2"
                  />
                  {hero.name}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4">
            <div className="grid grid-cols-5 gap-2 mb-2 text-white font-bold">
              <div className="col-span-1">Hero</div>
              <div className="col-span-1">Region</div>
              <div className="col-span-1">Lane</div>
              <div className="col-span-1">Skillset</div>
              <div className="col-span-1">Height</div>
            </div>
            {attempts.map((attempt, index) => renderAttempt(attempt))}
          </div>
        </div>
      ) : ( <div>Loading...</div>
      )}
      {showConfetti && <Confetti />}
    </div>
  );
};

export default SearchBar;