"use client";
import React, { useEffect } from "react";
import Card from "../components/FinishingUpCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
const PageFour = ({ searchParams }: any) => {
  const router = useRouter();
  const plan = searchParams.plan;
  const subTime = searchParams.month;
  const addOns = searchParams.addOns;
  if (!searchParams.plan || searchParams.plan === "") {
    router.push("/error-page");
  } else {
    return (
      <div className="pl-10 xl:pt-6 pt-2 h-full w-5/6 grid box-border  content-start relative">
        <h1 className="text-4xl font-bold text-MarineBlue">Finishing up</h1>
        <h2 className="text-MarineBlue opacity-50">
          Double-check everything looks OK before confirming
        </h2>

        <Card plan={plan} subTime={subTime} addOns={addOns} />
        <div className="grid grid-cols-2 pt-4">
          <button
            onClick={() => {
              router.back();
            }}
            type="submit"
            className="opacity-50  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit  px-5 py-2.5 text-center self-end"
          >
            GO Back
          </button>
          <Link
            href={"/confirm-page"}
            className="justify-self-end"
          >
            <button
              type="submit"
              className=" text-white bg-MarineBlue  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit  px-5 py-2.5 text-center self-end"
            >
              confirm
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default PageFour;
