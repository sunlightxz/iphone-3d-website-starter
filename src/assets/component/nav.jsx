import React from "react";

const Nav = () => {
  return (
    <div className="overflow-visible">
      <div
        className={`py-8 xs:px-2 md:px-8  flex justify-between z-30 max-w-9xl font-cairo relative`}
      >
        <div className="mx-auto w-3/6 flex justify-between items-center text-gray-400">
          <div className="cursor-pointer">
            <p className="relative navLetterB hover:text-white">
              <span clasName="navLetter">O</span>
              <span clasName="navLetter">U</span>
              <span clasName="navLetter">R</span>
              <span className="navLetter" style={{ margin: "0 0.2em" }}></span>
              <span clasName="navLetter">S</span>
              <span clasName="navLetter">T</span>
              <span clasName="navLetter">O</span>
              <span clasName="navLetter">R</span>
              <span clasName="navLetter">Y</span>
            </p>
          </div>

          <p className="hover:text-white cursor-pointer navLetterB">OUR WORK</p>
          <div className="w-16">
            <img
              className="transition-transform duration-300 ease-in-out transform  hover:scale-125 cursor-pointer"
              src="https://wecraftstudio.com/_next/static/media/WHITE-notext.43cf30aa.svg"
              alt=""
            />
          </div>
          <p className="hover:text-white cursor-pointer navLetterB">
            CONTACT US
          </p>
          <p className="hover:text-white cursor-pointer navLetterB">
            BOOK A CALL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
