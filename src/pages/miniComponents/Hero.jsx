import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-gc3w.onrender.com/api/v1/user/me",
        { withCredentials: true }
      );

      
      setUser(data.user);
    };
    getMyProfile();
  }, []);

  // user?.resume && user?.resume?.url
  let resumeUrl = "https://drive.google.com/file/d/11eyVZ9uauudCFulKiiEf1JFs3RWazLMu/view?usp=drive_link";

  if(user?.resume?.url){
    resumeUrl = user?.resume?.url;
  }

  
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>
      <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
        Hey, I'm Vijay Singh
      </h1>
      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.rem] 
      sm:text-[1.55rem] md:text-[2.rem] lg:text-[2.4rem] tracking-[5px] uppercase">

        <Typewriter
          words={["FULLSTACK DEVELOPER", "Aspiring Software Developer", "FREELANCER", "Problem Solver", "Continuous Learner"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />

      </h1>
      <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 
      items-center mt-4 md:mt-8 lg:mt-10">
        
        <Link to={user?.instagramURL} target="_blank">
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link>
        <Link to={user?.facebookURL} target="_blank">
          <Facebook className="text-blue-800 w-7 h-7" />
        </Link>
        <Link to={user?.linkedInURL} target="_blank">
          <Linkedin className="text-sky-500 w-7 h-7" />
        </Link>
        <Link to={user?.twitterURL} target="_blank">
          <Twitter className="text-blue-800 w-7 h-7" />
        </Link>
      </div>

      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to={user?.githubURL} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>
        <Link to={resumeUrl} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </Link>
      </div>
      
      <p className="mt-8 text-xl tracking-[2px]">{user?.aboutMe}</p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;
