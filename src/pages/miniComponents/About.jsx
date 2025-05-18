import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[5px] m-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT ME
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-100">
          Allow me to introduce myself.
        </p>
      </div>

      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14 px-4 sm:px-8">
          <div className="flex justify-center items-center">
            <img
              src="/img.JPG.png"
              alt="Vijay Singh Saud"
              className=" p-2 sm:p-4  h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px] shadow-lg"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              I'm Vijay Singh Saud, a Computer Science Engineering graduate from
              Uttarakhand Technical University, passionate about coding and
              development. I’m always seeking ways to improve my skills and am
              driven by a commitment to continuous learning.
            </p>
            <p>
              As I start my career, I’m excited to embrace new challenges and
              work on building impactful solutions in the tech industry.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl text-slate-200">
          With a dedication to technology and innovation, I’m ready to
          contribute, learn, and grow, bringing fresh perspectives to each
          opportunity. I pride myself on my commitment to meeting deadlines and
          delivering quality work, and I approach challenges with resilience and
          perseverance.
        </p>
      </div>
    </div>
  );
};

export default About;
