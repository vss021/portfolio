import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const getMyProjects = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-gc3w.onrender.com/api/v1/project/getall",
          { withCredentials: true }
        );
        setProjects(data.projects);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    getMyProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen overflow-x-hidden">
        <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
      </div>
    ); // Display loading spinner while fetching data
  }

  return (
    <div>
      <div className="relative mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY{" "}
          <span className="gap-4  text-[2rem] sm:text-[2.75rem] text-center 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1">
            PROJECTS
          </span>
        </h1>
        <p className="text-muted-foreground text-center text-lg mt-4">
          Discover the projects I’ve worked on. Each one is a step towards
          mastering the art of creation and innovation.
        </p>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {viewAll
          ? projects.map((element) => (
              <Link
                to={`/project/${element._id}`}
                key={element._id}
                className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <img
                  src={element.projectBanner?.url}
                  alt={element.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
                <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">
                  {element.title}
                </p>
              </Link>
            ))
          : projects.slice(0, 9).map((element) => (
              <Link
                to={`/project/${element._id}`}
                key={element._id}
                className="group  relative block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <img
                  src={element.projectBanner[0]?.url} // Updated to match the data structure
                  alt={element.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
                <p className="absolute bottom-2 left-2 text-white font-semibold text-lg">
                  {element.title}
                </p>
              </Link>
            ))}
      </div>

      {projects && projects.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
