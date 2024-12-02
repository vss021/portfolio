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
          "https://portfolio-backend-p9yq.onrender.com/api/v1/softwareapplication/getall",
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
    <div className="w-full flex flex-col gap-8 sm:gap-12 py-12 px-4 bg-gradient-to-r from-zinc-900 via-zinc-800 to-gry-100">
      <h1 className="text-tubeLight-effect text-[2rem] text-center sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[5px] sm:tracking-[10px] dancing_text mx-auto w-fit text-gray-800">
        My Tools & Technologies
      </h1>

      {/* Loading Effect */}
      {loading ? (
        <div className="flex justify-center items-center h-72">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid"></div>
          <p className="mt-4 text-center text-lg text-gray-600 font-semibold">
            Hang tight! We're fetching the latest tools and tech...
          </p>
        </div>
      ) : apps.length === 0 ? (
        <div className="text-center text-lg text-gray-600 font-semibold">
          Oops! It seems there are no tools available at the moment. Check back soon!
        </div>
      ) : (
        <div className="text-center text-lg text-gray-600 mb-6 font-medium">
          Below are some of the key tools and technologies I work with regularly. Explore them to see how I build robust solutions.
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
              <p className="text-muted-foreground text-center font-semibold text-lg text-white">{element.name}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolsAndTechs;
