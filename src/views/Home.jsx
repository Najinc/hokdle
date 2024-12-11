import React from 'react';
import SearchBar from '../components/SearchBar';
import heroes from '../data/heroes';

export default function Home() {
  document.title = "Welcome to the HoKDLE!";

  return (
    <div className="bg-hero-mainpage bg-cover bg-no-repeat h-[95vh] flex items-center justify-center">
      <h1>Hey</h1>
    </div>
  );
}
