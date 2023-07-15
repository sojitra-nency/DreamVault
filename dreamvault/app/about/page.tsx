import React from "react";

const About = () => {
    return (
        <div className="bg-white   shadow-md p-8 m-3 rounded-sm transform hover:-translate-y-2 transition duration-300 ease-in-out">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            ABOUT US
                        </h2>

                        <p className="mt-4 text-lg text-gray-500 text-justify ">

                            DreamVault is a crowdfunding web application that enables individuals and groups to raise funds for their dreams, projects, or ideas. Users can create customized campaigns, set fundraising goals, and provide updates on their progress. The platform offers secure payment options and transparent tracking of funds to ensure a smooth crowdfunding experience.
                        </p>
                        <p className="mt-4 text-lg text-gray-500 text-justify ">
                            With DreamVault, campaign creators can promote their projects through social sharing features, reaching a wider audience and increasing their chances of attracting backers. The platform also encourages community interaction through comment sections and discussion boards, fostering a supportive environment for dreamers to receive guidance and feedback. Additionally, creators can offer incentives and rewards to motivate backers, creating a sense of appreciation and driving contributions.
                        </p>
                        <p className="mt-4 text-lg text-gray-500 text-justify ">
                            Overall, DreamVault empowers users to pursue their aspirations by connecting them with a community of backers. By providing a user-friendly interface, secure payment options, and tools for engagement, DreamVault aims to democratize funding and bring a diverse range of projects to life.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-0 ml-10">
                        <img
                            className="m-h-70 object-fit mix-blend-multiply max-w-70  mx-auto lg:mx-0 rounded-lg"
                            src="/About.jpg"
                            alt="About Us"
                        />
                    </div>
                </div>
                <div className="flex justify-between mt-10 max-w-7xl ">
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <div className="flex">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#732fff] text-white text-md font-extrabold">
                                        1
                                    </div>

                                    <div className="ml-3 text-lg text-black font-semibold">
                                        Comprehensive Crowdfunding 
                                    </div>
                                </div><br/>
                                <p className="text-slate-500 font-medium text-justify ">
                                    DreamVault offers a comprehensive and user-friendly crowdfunding platform that caters to the diverse needs of dreamers and project creators. It provides a seamless and intuitive interface for creating and managing campaigns, tracking funds, and engaging with backers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <div className="flex">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#732fff] text-white text-md font-extrabold">
                                        2
                                    </div>

                                    <div className="ml-3 text-lg text-black font-semibold">
                                        Transparent Fund Tracking
                                    </div>
                                </div><br/>
                                <p className="text-slate-500 font-medium text-justify ">
                                    The second feature of DreamVault ensures transparency by providing real-time tracking of funds raised for each campaign. Backers can have confidence in their contributions, knowing that the platform maintains clear records of the funding progress and distribution.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <div className="flex">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#732fff] text-white text-md font-extrabold">
                                        3
                                    </div>

                                    <div className="ml-3 text-lg text-black font-semibold">
                                        NFTmint Integration
                                    </div>
                                </div><br/>
                                <p className="text-slate-500 font-medium text-justify ">
                                    DreamVault leverages the power of NFTmint technology, enabling creators to offer unique digital assets or experiences as rewards for backers. This integration adds value to campaigns, enhances the overall user experience, and taps into the growing popularity of the NFT ecosystem.</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>


        </div>


    );
};

export default About;
