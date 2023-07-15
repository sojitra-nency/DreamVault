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



    <div className="bg-black">
      <div className="relative flex" style={{ minWidth: '100vh' }}>
        <div className="h-screen p-1 m-1 overflow-y-scroll" style={{ minWidth: "75%" }} >
          {filteredFeed.map((item) => (
            <div className="flex justify-center mb-8" key={item.companyName}>
              <div className="flex flex-row items-center p-2 bg-opacity-50 mt-1  rounded-lg shadow bg-blue-950 h-4/5 md:p-4 dark:border-white-600 dark:hover:bg-blue-400 dark:hover:bg-opacity-40">
                <div className="flex-shrink-0">
                  <img className="text-gray-200" src={item.companyIcon} alt={item.companyName} style={{width:'40vh',height:'50vh'}} />
                </div>
                <div className="flex flex-col justify-center flex-grow ml-4">
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">{item.companyName}</h3>
                  <p className="mb-3 font-normal text-gray-200 dark:text-gray-200">{item.companyDescription}</p>
                  <p className="mt-4 text-base text-gray-200">Fund Raised Till Now: {item.fundRaisedTillNow}</p>
                  <p className="mt-4 text-base text-gray-200">Total People Invested: {item.totalPeopleInvested}</p>
                  <p className="mt-4 text-base text-gray-200">Funding Ends in :{" "}
              <span className="text-red-500">{timeDifference}</span>
            </p>

                  <div className="flex justify-left">
                    <button className="px-12 py-2 mt-6 font-medium text-white text-gray-600 bg-blue-300 rounded-lg hover:bg-blue-200">
                      <a
                        href={`/${item.companyName}?id=${item.companyName}`}
                        className="inline-block ml-2"
                      >
                        View More
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="w-full ">
            <form className="flex m-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-200 bg-transparent border rounded-lg border-white-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for Companies..."
                  required
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </form>


            <div className="flex flex-col justify-end m-4 w-fit">
              <div className="p-4 bg-gray-300 rounded-lg">
                <h3 className="mb-2 text-xl font-bold text-gray-800">Notification Title</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin orci ac semper interdum. Curabitur rhoncus justo in urna efficitur, et ultrices odio pulvinar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}