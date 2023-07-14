'use client'
import React, { useState, useEffect } from "react";
import data from './../temp/Feed.json'
//import Navbar from "../components/Navbar";
import SearchComponent from "../utility_components/SearchComponent";

interface FeedItem {
    companyIcon: string;
    companyName: string;
    companyDescription: string;
    fundRaisedTillNow: number;
    totalPeopleInvested: number;
}
export default function Home() {
  const [feed, setFeed] = useState<FeedItem[]>([]);
    const [filteredFeed, setFilteredFeed] = useState<FeedItem[]>([]);

    useEffect(() => {
      setFeed(data.feed);
      setFilteredFeed(data.feed);
    }, []);

    const handleSearch = (searchQuery: string) => {
        const filteredData = feed.filter((item) =>
            item.companyName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFeed(filteredData);
    };
  return (
     <div className="p-4 flex flex-col justify-center">
            <div className="sticky top-16 items-center ">
                <SearchComponent onSearch={handleSearch} />
            </div>

            {filteredFeed.map((item) => (
                <div className=" justify-center">
                    <div className="p-4 m-4 border-2" key={item.companyName}>
                    <img src={item.companyIcon} alt={item.companyName} />
                    <h3>{item.companyName}</h3>
                    <p>{item.companyDescription}</p>
                    <p>Fund Raised Till Now: {item.fundRaisedTillNow}</p>
                    <p>Total People Invested: {item.totalPeopleInvested}</p>
                    <p>Funding Ends in : {item.time}</p>
                    <a href={`/${item.companyName}?id=${item.companyName}`}> View More</a>
                </div>
                </div>
            ))}
        </div>
  )
}
