import React, { useState } from "react";

const Partners = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const {currentTarget :target}=e ;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };
  return (
    <section
      id="partners"
      className="about h-[80vh] rounded-xl flex flex-col justify-center lg:justify-start items-center w-full"
    >
      <header className="flex flex-col items-center gap-5 max-w-[56rem] mt-0 mx-auto mb-24">
        <div className="overflow-hidden">
          <h1 className="font-extrabold uppercase text-center text-7xl">
            our partners
          </h1>
        </div>
        <div className="max-w-[40rem]">
          <p className="text-xl text-gray-400 text-center">
            Building success through strong alliances: Our dedicated
            partnerships drive collective achievements and shared milestones.
          </p>
        </div>
      </header>
      <div className="container mx-auto w-fit">
        <div id='cards'
          className="grid cards xl:grid-cols-6 md:grid-cols-4 grid-cols-2 justify-center gap-10 relative"
          onMouseMove={handleMouseMove}
        >
          {" "}
          <div className="relative ">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 card  flex justify-center items-center px-7 py-5 rounded border border-white/10 transition-all gloweb hover:bg-zinc-900 hover:border-white/5  cursor-pointer">
                <img src="vite.svg" width={100} height={100} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto rounded-full w-fit ">
        <div className="bg-gradient-to-r from-slate-600/10  via-slate-300/30 mx-auto to-black ">
            <div className="mx-auto flex flex-row  items-center text-xs lg:text-sm gap-5 bg-white/20 backdrop-blur-3xl text-white border border-white/10 shadow-xl shadow-white/5 font-somar w-fit rounded-full px-10 py-4 capitalize mt-10">
            Trusted by over 100 clients worldwide
            <img src="Frame.png" alt=""  className="w-8 h-8"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
