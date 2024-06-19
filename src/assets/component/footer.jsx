import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-full p-12 mt-10 z-30">
      <div className="px-12 border-gray-500 border-t py-10 mx-auto w-5/6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between gap-16">
            <div className="">
              <img
                src="https://wecraftstudio.com/_next/static/media/white__logo.2407b5b2.svg"
                className="w-[150px]"
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between gap-16">
              <div className="flex flex-col ">
                <span>AboutUs</span>
                <a
                  href=""
                  className="text-gray-400 hover:text-gray-500 mb-3 mt-4"
                >
                  Our story
                </a>
                <a href="" className="text-gray-400 hover:text-gray-500 mb-3">
                  Our work
                </a>
                <a href="" className="text-gray-400 hover:text-gray-500 mb-3">
                  Projects
                </a>
                <a href="" className="text-gray-400 hover:text-gray-500 mb-3">
                  Book a call
                </a>
              </div>
              <div className="flex flex-col ">
                <span>Legal</span>
                <a
                  href=""
                  className="text-gray-400 hover:text-gray-500 mb-3 mt-4"
                >
                  Terms of use
                </a>
                <a href="" className="text-gray-400 hover:text-gray-500 mb-3">
                  Privacy policy
                </a>
                <a href="" className="text-gray-400 hover:text-gray-500 mb-3">
                  About us
                </a>
              </div>
              <div className="flex flex-col ">
                <span>help</span>
                <a
                  href=""
                  className="text-gray-400 hover:text-gray-500 mb-3 mt-4"
                >
                  Contact us
                </a>
                <a href="" className="text-gray-400 hover:text-gray-500 mb-3">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10">© We Craft, All rights resereved.</p>
      </div>
    </footer>
  );
};

export default Footer;
