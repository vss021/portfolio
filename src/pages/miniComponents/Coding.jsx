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
            icons : gfg,
            name : "Geeks For Geeks",
            profileUrl : "https://www.geeksforgeeks.org/user/saud_vijay_021/",
            heightLight : "700+ Problems Solve"
        },
        {
            icons  : leetcode,
            name : "LeetCode",
            profileUrl : "https://www.geeksforgeeks.org/user/saud_vijay_021/",
            heightLight : "600+ Problems Solve"
        },

        {
            icons : codechef,
            name : "CodeChef",
            heightLight : "300+ Problems Solve",
            profileUrl : "https://www.geeksforgeeks.org/user/saud_vijay_021/"
        },

        {
            icons : ninja,
            name : "Coding Ninjas",
            heightLight : "300+ Problems Solve",
            profileUrl : "https://www.geeksforgeeks.org/user/saud_vijay_021/"
        },



    ]

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1
        className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit"
      >
        Coding Platform's
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {platform &&
          platform.map((element, index) => {
            return (
              <Card
                className="h-fit p-7 flex flex-col justify-center items-center gap-5"
                key={index}
              >

                
              <Link to = {element.profileUrl} target="_blanck">
                <img
                  src={element.icons}
                  alt={element.name}
                  className="h-12 sm:h-24 w-auto"
                  />
                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>

                <p className="text-muted-foreground text-center">
                  {element.heightLight}
                </p>

                  </Link>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
