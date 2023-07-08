"use client";
import React, { useState } from "react";
import Card from "../components/AddOnsCard";
import { AddOns } from "@/objects/addOns";
import { plans } from "@/objects/plans";

import { useRouter } from "next/navigation";
const PageThree = ({ searchParams }: any) => {
  const router = useRouter();
  const isMonth = searchParams.month;
  const [addOnsSlection, setAddOnsSelection] = useState([false, false, false]);
  const navigate = () => {
    router.push(
      `/step-four?plan=${searchParams.plan}&month=${searchParams.month}&addOns=${addOnsSlection}`
    );
  };
  if (!searchParams.plan || searchParams.plan === "") {
    router.push("/error-page");
  } else {
    return (
      <div className="pl-10 xl:pt-6 pt-2 h-full w-5/6 grid  content-start relative ">
        <h1 className="text-4xl font-bold text-MarineBlue">Pick add-ons</h1>
        <h2 className="text-MarineBlue opacity-50">
          Add-ons help enhance your gaming experience
        </h2>
        <div className="grid gap-5 mt-4">
          {AddOns.map((addOn, i) => (
            <div
              className={`border p-2 px-4 rounded-xl text-MarineBlue hover:bg-LightBlue hover:border-MarineBlue cursor-pointer ${
                addOnsSlection[i] ? `bg-LightBlue border-MarineBlue` : ""
              }`}
              key={i}
              onClick={() => {
                let newSelection = addOnsSlection;
                newSelection[i]
                  ? (newSelection[i] = false)
                  : (newSelection[i] = true);
                setAddOnsSelection(newSelection);
                router.refresh();
              }}
            >
              <Card
                name={addOn.name}
                disc={addOn.disc}
                price={isMonth === "true" ? addOn.price : addOn.price * 10}
                select={addOnsSlection[i]}
              />
            </div>
          ))}
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

export default PageThree;
