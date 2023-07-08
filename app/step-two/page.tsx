"use client";
import React, { useEffect } from "react";
import Card from "../components/PlansCard";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { plans } from "@/objects/plans";
const StepTwo = ({ searchParams }: any) => {
  const client = {
    name: searchParams.name,
    email: searchParams.email,
    phoneNumber: searchParams.phone_number,
  };

  const router = useRouter();
  const [planName, setPlanName] = useState("Arcade");
  const [isMonth, setIsMonth] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(0);

  const navigate = () => {
    router.push(`/step-three?plan=${selectedPlan}&month=${isMonth}`);
  };
  if (!client.email || !client.name || !client.phoneNumber) {
    router.push("/error-page");
  } else {
    return (
      <div className="pl-10 xl:pt-6 pt-2 h-full w-5/6 grid content-start relative text-MarineBlue">
        <h1 className="text-4xl font-bold">Select your plan</h1>
        <h2 className="opacity-50">
          You have the option of monthly or yearly billing
        </h2>
        <div className="flex flex-wrap w-full justify-between gap-6 mb-6 pt-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border rounded-md md:h-[12em] md:w-40 max-md:w-full pl-2 p-4   relative hover:bg-LightBlue hover:border-MarineBlue cursor-pointer ${
                planName === plan.Plan ? `bg-LightBlue border-MarineBlue` : ""
              }`}
              onClick={() => {
                setPlanName(plan.Plan);
                setSelectedPlan(i);
              }}
            >
              <Card
                image={plan.img}
                name={plan.Plan}
                month={plan.price}
                isMonth={isMonth}
              />
            </div>
          ))}
        </div>
        <div className="w-full bg-LightBlue p-4 rounded-xl flex flex-wrap justify-center">
          <span className="mr-3 text-sm font-medium ">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={(e) => {
                const target = e.target as HTMLInputElement;
                target.checked ? setIsMonth(false) : setIsMonth(true);
              }}
            />
            <div className="w-11 h-6 bg-MarineBlue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  "></div>
          </label>
          <span className="ml-3 text-sm font-medium ">Yearly</span>
        </div>
        <div className="max-md:grid max-md:grid-cols-2 max-md:pt-4">
          <button
            onClick={() => {
              router.back();
            }}
            type="submit"
            className="md:absolute bottom-2 left-7 opacity-50  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit  px-5 py-2.5 text-center self-end"
          >
            GO Back
          </button>
          <button
            onClick={() => {
              navigate();
            }}
            type="submit"
            className="md:absolute max-md:justify-self-end bottom-2 right-0 text-white bg-MarineBlue  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit  px-5 py-2.5 text-center self-end"
          >
            Next Step
          </button>
        </div>
      </div>
    );
  }
};

export default StepTwo;
