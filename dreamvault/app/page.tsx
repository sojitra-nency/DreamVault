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



    <div className="bg-white pt-10  mt-10 items-center content-center">
      <div className="p-4  drop-shadow-2xl h-screen">
        <div className="sm:flex sm:flex-row md:flex justify-evenly align-middle  p-10 ">
          <div className="flex flex-col text-5xl text-[#732fff] z-15   items-center content-center m-10">
            <div className="m-4 p-4">

              <div className="grid grid-flow-row p-4 m-9 gap-y-5">
                <div className="text-black text-6xl font-bold">
                  Welcome To
                </div>
                <div className=" text-center"><span className="text-[#732fff] text-6xl font-extrabold ">DreamVault</span>,</div>
              </div>
              <div className="grid grid-flow-row p-4 m-9 gap-y-5">
                <p className=" text-black text-4xl">Decentralized Application</p>

                <p className=" text-black text-4xl">Empowering Dreams,<span className="text-[#732fff] text-center">Building Together</span>.</p>
                <div className="flex justify-center">
                  <button 
                  className=" px-8 text-lg h-10 font-light text-white bg-[#732fff] rounded-full text-right hover:border-2 hover:border-[#732fff] hover:bg-white hover:text-[#732fff]"
                  onClick={() => {
                    const liveEventsDiv = document.getElementById("live-events");
                    if (liveEventsDiv) {
                      liveEventsDiv.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  >Explore</button>
                </div>

              </div>

            </div>
          </div>
          <img className=" items-center" style={{ maxWidth: '600px', color: 'blue' }} src="/home.svg" alt="NA" />
        </div>
      </div>
      <div className=" shadow-lg text-[#732fff] rounded-xl" id="live-events">
        <div className="sticky mx-10 justify-between text-center flex">
          <div className="p-4 text-5xl font-bold " style={{width:'25%'}}>Live Events</div>
          <div className="" style={{width:'35%'}}>
          <form className="flex m-4">
            <div style={{width:'100%'}} className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-black bg-transparent border rounded-lg border-white-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for Companies..."
                required
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </form>
          </div>
        </div>
        <div className="relative " style={{ minWidth: '100vh' }}>

          <div className="flex p-1 m-1 " style={{ maxWidth: "100%" }} >
            <div className="grid sm:grid-cols-1 md:grid-cols-4">
              {filteredFeed.map((item) => {
                const timeDifference = getTimeDifference(item.deadline);
                return (
                  <div className=" m-8 shadow-lg text-black" key={item.companyName}>
                    <div className="rounded-lg ">
                      <div className="">
                        <img className=" rounded-t-lg h-48" src={item.companyIcon} alt={item.companyName} style={{ width: '100%', maxHeight: '50vh' }} />
                      </div>
                      <div className="flex flex-col flex-grow m-4 text-justify gap-1">
                        <h3 className=" text-2xl font-bold tracking-tight ">{item.companyName}</h3>
                        <p className=" font-normal  dark: text-sm">{item.companyDescription}</p>
                        <p className="mt-4 text-base ">Fund Raised Till Now: {item.fundRaisedTillNow}</p>
                        <p className="mt-4 text-base ">Total People Invested: {item.totalPeopleInvested}</p>
                        <p className="mt-4 text-base ">Funding Ends in :{" "}
                          <span className="text-red-500">{timeDifference}</span>
                        </p>

                        <div className="flex justify-center">
                          <button className="m-2 text-white rounded-full bg-[#732fff] px-8 text-lg h-10 font-light hover:border-2 hover:border-[#732fff] hover:bg-white hover:text-[#732fff]">
                            <a
                              href={`/${item.companyName}?id=${item.companyName}`}
                              className="inline-block ml-2  "
                            >
                              View More
                            </a>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>


    </div>
  )
}