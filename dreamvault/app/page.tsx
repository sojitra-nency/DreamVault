"use client"
import React, { useState, useEffect } from "react";
import data from './../temp/Feed.json';
import SearchComponent from "../utility_components/SearchComponent";

interface FeedItem {
  companyIcon: string;
  companyName: string;
  companyDescription: string;
  fundRaisedTillNow: number;
  totalPeopleInvested: number;
  deadline: string;
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

  const getTimeDifference = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();

    const timeDifference = deadlineDate.getTime() - currentDate.getTime();
    //const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));

    return `${hours} hrs ${minutes} min`;
  };

  const [timeDifference, setTimeDifference] = useState<string>("");

  useEffect(() => {
    if (filteredFeed.length > 0) {
      setTimeDifference(getTimeDifference(filteredFeed[0].deadline));

      const timer = setInterval(() => {
        setTimeDifference(getTimeDifference(filteredFeed[0].deadline));
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [filteredFeed]);

  return (
    <div className="p-4 flex flex-col justify-center">
      <div className="sticky top-16 items-center ">
        <SearchComponent onSearch={handleSearch} />
      </div>

      {filteredFeed.map((item) => (
        <div className="justify-center text-lg" key={item.companyName}>
          <div className="p-4 m-4 border-2">
            <img src={item.companyIcon} alt={item.companyName} />
            <h3>{item.companyName}</h3>
            <p>{item.companyDescription}</p>
            <p>Fund Raised Till Now: {item.fundRaisedTillNow}</p>
            <p>Total People Invested: {item.totalPeopleInvested}</p>
            <p>
              Funding Ends in :{" "}
              <span className="text-red-500">{timeDifference}</span>
            </p>
            <a href={`/${item.companyName}?id=${item.companyName}`}>
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
