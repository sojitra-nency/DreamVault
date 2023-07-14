"use client"
import React, { useState, ChangeEvent } from "react";

interface SearchComponentProps {
  onSearch: (searchQuery: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-1">
        <input
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search For Companies..."
          value={searchQuery}
          onChange={handleSearch}
        />
        
      </div>
    </div>
  );
};

export default SearchComponent;
