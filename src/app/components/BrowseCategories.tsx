import React from "react";
import Image from "next/image";
import { TvItems } from "../components/constants";
import { PortableItems } from "../components/constants";
import { HouseholdItems } from "../components/constants";
import { TopBrands } from "../components/constants";
import { Brands } from "../components/constants";

const BrowseCategories = () => {
  return (
    <div className="bg-neutral-100">
      <div className="lg:mx-44 mx-5 mt-20">
        {/* /////////////////////////////////////// */}

        <div className="mb-10">
          <h1 className="pb-8 text-[#68676A]">Television & Video</h1>
          <div className="flex gap-5 text-center items-center justify-center">
            {TvItems.map((item, index) => (
              <div key={index}>
                <Image src={item.src} alt={item.alt} width={80} height={80} />
                <p className="text-[#A7A5A5]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* /////////////////////////////////////// */}

        <div className="mb-10">
          <h1 className="pb-8 text-[#68676A]">Generator & Portable Power</h1>
          <div className="flex gap-5 text-center items-center justify-center">
            {PortableItems.map((item, index) => (
              <div key={index}>
                <Image src={item.src} alt={item.alt} width={80} height={80} />
                <p className="text-[#A7A5A5]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* /////////////////////////////////////// */}

        <div className="mb-10">
          <h1 className="pb-8 text-[#68676A]">Household Electronics</h1>
          <div className="flex gap-5 text-center items-center justify-center">
            {HouseholdItems.map((item, index) => (
              <div key={index}>
                <Image src={item.src} alt={item.alt} width={80} height={80} />
                <p className="text-[#A7A5A5]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* /////////////////////////////////////// */}

        <div className="mb-10">
          <h1 className="pb-8 text-[#68676A]">Top Brands</h1>
          <div className="flex gap-5 text-center items-center justify-center">
            {TopBrands.map((item, index) => (
              <div key={index}>
                <Image src={item.src} alt={item.alt} width={80} height={80} />
                <p className="text-[#A7A5A5]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* /////////////////////////////////////// */}

        <div className="mb-10">
          <h1 className="pb-8 text-[#68676A]">Brands</h1>
          <div className="flex gap-5 text-center items-center justify-center">
            {Brands.map((item, index) => (
              <div key={index}>
                <Image src={item.src} alt={item.alt} width={80} height={80} />
                <p className="text-[#A7A5A5]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategories;
