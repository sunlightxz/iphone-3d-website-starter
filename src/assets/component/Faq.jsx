import React, { useState, useRef } from "react";
import { faqData } from "../data/services";
const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRef = useRef(null);

  const handleTabClick = (idx) => {
    setActiveTab((prevTab) => (prevTab === idx ? 0 : idx));
  };

  const handleRotate = (idx) => {
    return activeTab === idx ? "rotate-180" : "";
  };

  const handleToggle = (idx) => {
    return activeTab === idx
      ? { maxHeight: `${tabRef.current?.scrollHeight}px` }
      : {};
  };

  return (
    <div className="h-full relative flex flex-col justify-center lg:justify-start items-center w-full mt-20">
      <div className="flex flex-col justify-center items-center mb-24">
        <h1 className="text-[76px] font-cairo font-semibold mb-4 uppercase">
          FAQ
        </h1>
        <p className="flex flex-col items-center justify-center text-xl font-light text-gray-400">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span>Lorem ipsum dolor sit amet.</span>
        </p>
      </div>
      <ul className="flex flex-col">
        {[...Array(6)].map((_, idx) => (
          <li
            className="bg-black my-2 shadow-lg border-b pb-2 border-gray-500"
            key={idx}
          >
            <h2
              onClick={() => handleTabClick(idx + 1)}
              className="flex text-2xl flex-row justify-between items-center font-light font-cairo p-3 cursor-pointer"
            >
              <span>{faqData[idx].question}</span>
              <svg
                className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  idx + 1
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              ref={tabRef}
              style={{
                overflow: "hidden",
                transition: "max-height 0.5s",
                maxHeight: 0,
                ...handleToggle(idx + 1),
              }}
            >
              <p className="p-3 text-gray-300">{faqData[idx].answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
