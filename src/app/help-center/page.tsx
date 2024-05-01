"use client";
import React from "react";
import Image from "next/image";
import { CardsData } from "../components/constants";
import Acordion from "../components/Acordion";

const page = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="py-20 bg-neutral-100">
        <div className="">
          <div className="bg-[#A83AC3] text-center md:py-28 py-20 md:px-0 px-12">
            <h1 className="md:text-4xl text-2xl text-[#FFF] leading-[168.75%] font-bold pb-7">
              How Can We Help You?
            </h1>
            <p className="text-[#FFF] text-base">
              Choose a category below to email the support team so we can get
              back to you as fast as possible
            </p>
          </div>

          <div className="lg:mx-44 mx-10 mt-20">
            {/* Map cards */}
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-11">
              {CardsData.map((Card, index) => (
                <div
                  key={index}
                  className="bg-white text-center py-20 px-9 px[34px] shadow-xl"
                >
                  <Image
                    src={Card.imageSrc}
                    alt={Card.title}
                    className="mx-auto pb-2"
                    width={40}
                    height={40}
                  />
                  <h1 className="text-2xl leading-[170.833%]">{Card.title}</h1>
                  <p className="text-base leading-[168.75%]">
                    {Card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#DFD7F0] my-11 md:my-20 flex flex-col sm:flex-row p-8 md:p-20 items-center justify-between rounded">
              <div className="mb-4 sm:mb-0 sm:mr-8">
                <h1 className="text-lg md:text-2xl leading-[170.833%] font-normal pb-3">
                  Can&apos;t find what you are looking for?
                </h1>
                <p className="text-sm md:text-base leading-[168.75%] text-[#68676A] font-normal">
                  Check our Frequently Asked Questions or
                </p>
              </div>
              <button className="border border-[#2C89A7] rounded-xl p-3 md:p-5 text-[#2C89A7] font-semibold">
                Ask a Support Agent
              </button>
            </div>
            <Acordion />
          </div>
          
          {/* BACK TO TOP */}
          <div className="">
            <button
              className="md:bg-transparent md:text-[#2C89A7] bg-[#A83AC3] text-[#FFF] p-3 font-semibold flex text-center justify-center items-center w-full"
              onClick={scrollToTop}
            >
              Back to Top
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L11 6.414V15a1 1 0 1 1-2 0V6.414L7.707 7.707a1 1 0 0 1-1.414-1.414l3-3A1 1 0 0 1 10 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
