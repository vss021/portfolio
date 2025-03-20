import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ToolsAndTechs = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading effect

  useEffect(() => {
    const getMyApps = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-gc3w.onrender.com/api/v1/softwareapplication/getall",
          { withCredentials: true }
        );
        setApps(data.softwareApplications);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching apps:", error);
        setLoading(false); // Set loading to false even on error
      }
    };
    getMyApps();
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12 py-12 px-4 bg-gradient-to-r from-zinc-900 via-zinc-800 to-gry-100 overflow-x-hidden">
      <h1
        className="gap-4  text-[1.5rem] sm:text-[2.75rem] text-center 
          md:text-[3rem] lg:text-[3.8rem]  md:leading-[56px] 
          lg:leading-[90px] tracking-[5px] mx-auto w-fit font-extrabold about-h1"
      >
        My Tools & Technologies
      </h1>

      {/* Loading Effect */}
      {loading ? (
        <div className="flex flex-col justify-center items-center h-72">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid"></div>
          <p className="mt-4 text-center text-lg text-slate-200 font-semibold">
            Hang tight! We're fetching the latest tools and tech...
          </p>
        </div>
      ) : apps.length === 0 ? (
        <div className="text-center text-lg text-slate-200 font-semibold">
          Oops! It seems there are no tools available at the moment. Check back
          soon!
        </div>
      ) : (
        <div className="text-center text-lg text-gray-600 mb-6 font-medium">
          Below are some of the key tools and technologies I work with
          regularly. Explore them to see how I build robust solutions.
        </div>
      )}

      {/* Displaying Tools and Tech Cards */}
      {apps.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {apps.map((element) => (
            <Card
              key={element._id}
              className="h-fit p-6 flex flex-col justify-center items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg transform hover:scale-105 bg-zinc-700 border border-gray-800 hover:border-blue-500"
            >
              <img
                src={element.svg?.url}
                alt={element.name}
                className="h-16 sm:h-24 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <p className="text-muted-foreground text-center font-semibold text-lg text-white">
                {element.name}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolsAndTechs;
