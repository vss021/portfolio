import { Card } from "@/components/ui/card";
import React from "react";
import gfg from "../asserts/gfg.png";
import codechef from "../asserts/codechef.jpg";
import leetcode from "../asserts/leetcode.png";
import ninja from "../asserts/ninja.png";

import {Link} from 'react-router-dom';


export default function Coding() {
  const platform = [
    {
      icons: gfg,
      name: "Geeks For Geeks",
      profileUrl: "https://www.geeksforgeeks.org/user/saud_vijay_021/",
      heightLight: "700+ Problems Solved",
      description:
        "Geeks for Geeks is a platform to practice programming problems and improve problem-solving skills. It offers various tutorials and challenges across multiple topics.",
    },
    {
      icons: leetcode,
      name: "LeetCode",
      profileUrl: "https://leetcode.com/u/vijay_singh021/",
      heightLight: "600+ Problems Solved",
      description:
        "LeetCode is one of the most popular platforms for preparing for technical interviews, offering a wide range of algorithmic problems and coding challenges.",
    },
    {
      icons: codechef,
      name: "CodeChef",
      profileUrl: "https://www.codechef.com/users/saudvijay",
      heightLight: "300+ Problems Solved",
      description:
        "CodeChef is a competitive programming platform that hosts monthly contests and provides challenges for developers to sharpen their coding skills.",
    },
    {
      icons: ninja,
      name: "Coding Ninjas",
      profileUrl: "https://www.codingninjas.com/career",
      heightLight: "300+ Problems Solved",
      description:
        "Coding Ninjas offers a variety of programming courses and challenges. It’s a great place to learn new concepts and improve your coding abilities.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12 px-4 overflow-x-hidden ">
      <h1 className="gap-4  text-[2rem] sm:text-[2.75rem] text-center 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1">
        Coding Platforms
      </h1>
      <div className="text-center mb-8">
        <p className="text-xl text-sky-200 text-muted-foreground">
          These are some of the top platforms where I have solved coding problems to improve my skills and prepare for technical interviews.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
        {platform &&
          platform.map((element, index) => {
            return (
              <Card
                key={index}
                className="h-fit p-7 flex flex-col justify-center items-center gap-5 border rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 hover:shadow-2xl"
              >
                <Link
                  to={element.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src={element.icons}
                    alt={element.name + " logo"}
                    className="h-12 sm:h-24 w-auto rounded-full border border-gray-200 shadow-md"
                  />
                  <p className="text-muted-foreground text-center font-semibold text-lg mt-2">
                    {element.name}
                  </p>
                  <p className="text-muted-foreground text-center text-sm">
                    {element.heightLight}
                  </p>
                </Link>
                <p className="text-center text-muted-foreground text-sm mt-4">
                  {element.description}
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
