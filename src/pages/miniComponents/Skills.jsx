import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading effect

  useEffect(() => {
    const getMySkills = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-gc3w.onrender.com/api/v1/skill/getall",
          { withCredentials: true }
        );
        setSkills(data.skills);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching skills:", error);
        setLoading(false); // Set loading to false even on error
      }
    };
    getMySkills();
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-10 sm:gap-16 px-4 sm:px-8 py-12 max-w-screen-xl mx-auto overflow-x-hidden">
      {/* Title */}
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wide">
        SKILLS
      </h1>

      {/* Loading Effect */}
      {loading ? (
        <div className="flex justify-center items-center h-72">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        // Skills Grid
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill._id}
              className="h-full flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg transform hover:scale-105 hover:border-blue-500"
            >
              <img
                src={skill.svg?.url}
                alt={skill.title}
                className="h-16 w-auto sm:h-20 md:h-24 object-contain mb-4"
              />
              <p className="text-center text-white text-sm sm:text-base font-medium">
                {skill.title}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
