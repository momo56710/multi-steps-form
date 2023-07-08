"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { stringify } from "postcss";
const StepOne = () => {
  const [payload, setPayload] = useState({
    name: " ",
    email: " ",
    phoneNumber: "",
  });
  const router = useRouter();
  const formSubmit = (e: any) => {
    e.preventDefault();
    router.push(
      `/step-two?name=${payload.name}&email=${payload.email}&phone_number=${payload.phoneNumber}`
    );
  };
  return (
    <div className="pl-10 xl:pt-6 pt-2 h-full w-5/6 grid  content-start relative ">
      <h1 className="text-4xl font-bold text-MarineBlue">Personal info</h1>
      <h2 className="text-MarineBlue opacity-50">
        Please provide your name, email address, and phone number
      </h2>

      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
          formSubmit(e);
        }}
      >
        <div className="grid gap-6 mb-6 pt-4">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 text-MarineBlue font-bold border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder=" e.g. Stephen King"
              required
              onChange={(e) => {
                payload.name = e.target.value;
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email_address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email_address"
              className="bg-gray-50 text-MarineBlue font-bold border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder=" e.g. stephenking@lorem.com"
              required
              onChange={(e) => {
                payload.email = e.target.value;
              }}
            />
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone-number"
              className="bg-gray-50 text-MarineBlue font-bold border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="e.g. +1234567890"
              required
              onChange={(e) => {
                payload.phoneNumber = e.target.value;
              }}
            />
          </div>
        </div>
        <div className="grid justify-end ">
          <button
            type="submit"
            className="  text-white bg-MarineBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit  px-5 py-2.5 text-center self-end"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
