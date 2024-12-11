import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import heroes from "../data/heroes";

export default function Infinity() {

  return (
    <div className="bg-hero-mainpage bg-cover bg-no-repeat h-[95vh] flex items-center justify-center">
      <div className="bg-[#8f6721]/75 w-[90vh] min-h-[70vh] rounded-xl shadow-xl flex flex-col items-center justify-center p-4">
        <h1 className="text-white text-3xl mb-4 font-radikal">Search for a Hero</h1>
        <SearchBar data={heroes} />
      </div>
    </div>
  );
}
