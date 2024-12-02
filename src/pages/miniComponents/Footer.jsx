import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 mt-6 w-full max-w-[1050px] mx-auto">
      <hr className="border-t-2 border-gray-300" />
      
      {/* Footer content */}
      <div className="flex flex-col items-center mt-5 text-center sm:text-left">
        <h1 className="text-tubeLight-effect text-3xl mt-5 tracking-[8px]">
          Thanks For Scrolling
        </h1>
        
        {/* Social Links */}
        <div className="mt-4 flex gap-6">
          <a
            href="https://www.linkedin.com/in/vijay-singh-saud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vss021"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-black"
          >
            GitHub
          </a>
         
        </div>

        {/* Contact Section */}
        <p className="text-muted-foreground text-sm mt-3">
          Feel free to reach out for collaborations or questions. Let's build something great together!
        </p>

        {/* Copyright */}
        <p className="text-muted-foreground text-xs mt-4">
          &copy; {new Date().getFullYear()} Vijay Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
