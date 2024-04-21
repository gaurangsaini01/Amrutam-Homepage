import React from "react";
import beech from "../assets/beachbottle.jpg";
const BeachBottle = () => {
  return (
    <div
      className="flex items-center justify-center relative bg-cover bg-center w-full h-[600px]"
      style={{
        backgroundImage: `url(${beech})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.59)] via-[rgba(0,0,0,0.53)] to-[rgba(14,14,14,0.4)] "></div>
      <div className="md:w-[60%] w-[75%] z-50 font-medium flex flex-col md:gap-8 gap-5">
        <h1 className="xl:text-[64px] md:text-[45px] text-[32px] xl:leading-[82px] md:leading-[58px] leading-[42px] text-center text-[#C3D0C4]">Ready to restore harmony in your mind, body and spirit?</h1>
        <div className="flex mb-10 sm:mb-0 items-center justify-center">
            <button className="w-[276px] rounded-xl font-normal border-none h-[72px] text-[18px] md:text-[24px] text-white bg-[#3A643B]">Book A Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default BeachBottle;
