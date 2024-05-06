"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can send the form data to backend
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    console.log("Photos:", photos);
    // To Reset the form fields
    setEmail("");
    setSubject("");
    setMessage("");
    setPhotos([]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-20 bg-neutral-100">
      <div className="bg-[#A83AC3] text-center md:py-28 py-20 md:px-0 px-12">
        <h1 className="md:text-4xl text-2xl text-[#FFF] leading-[168.75%] font-bold pb-7">
          How Can We Help You?
        </h1>

        <p className="text-[#FFF] text-base">
          Choose a category below to email the support team so we can get back
          to you as fast as possible
        </p>
      </div>

      <div className="lg:mx-44 mx-10 mt-20">
        <form className="space-y-4 ">
          <div>
            <label
              htmlFor="email"
              className="block font-medium leading-[168.75%] text-[#666E80]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-5 block bg-white border w-full rounded-md border-[#E6E7EE]  focus:border-indigo-200 focus:ring focus:ring-purple-100 focus:ring-opacity-50 outline-none placeholder:text-[#98A1B3]"
              required
              placeholder="Faustinawallace@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block font-medium leading-[168.75%] text-[#666E80]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="mt-1 py-3.5 px-5 block bg-white border w-full rounded-md border-[#E6E7EE]  focus:border-indigo-200 focus:ring focus:ring-purple-100 focus:ring-opacity-50 outline-none placeholder:text-[#98A1B3]"
              required
              placeholder="Issues with..."
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium leading-[168.75%] text-[#666E80]"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              //   rows="4"
              className="mt-1 py-10 px-5 block w-full bg-white border rounded-md border-[#E6E7EE]  focus:border-indigo-200 focus:ring focus:ring-purple-100 focus:ring-opacity-50 outline-none placeholder:text-[#98A1B3]"
              required
              placeholder="Describe your issue as detailed as possible.."
            ></textarea>
          </div>

          <div className="">
            <label
              htmlFor="photos"
              className="block font-medium leading-[168.75%] text-[#666E80]"
            >
              Photo
            </label>
            <input
              type="file"
              id="photos"
              onChange={handlePhotoChange}
              multiple
              className="mt-1 bg-white block w-full rounded-md border-[#E6E7EE] focus:border-indigo-200 focus:ring focus:ring-purple-100 focus:ring-opacity-50 outline-none py-16 px-5 items-center"
            />
          </div>

          <div className="flex justify-center pt-20">
            <button
              type="submit"
              className="bg-[#A83AC3] text-white font-medium py-5 px-10 rounded-md md:w-96 w-full  focus:outline-none text-base leading-[168.75%]"
            >
              Send us a message
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10">
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
  );
};

export default Page;

