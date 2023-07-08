"use client";
import React from "react";
import { Checkbox } from "@material-tailwind/react";

type addOn = {
  name: string;
  disc: string;
  price: number;
  select: boolean;
};
const Card = ({ name, disc, price, select }: addOn) => {
  return (
    <div>
      <div className="grid items-center gap-5 w-full grid-cols-3">
        <div className="flex items-center gap-5 col-span-2">
          <input
            readOnly
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 text-MarineBlue bg-gray-100 border-gray-300 rounded focus:ring-0"
            checked={select ? true : false}
          />
          <div>
            <h1 className="font-bold">{name}</h1>
            <h6 className="opacity-50">{disc}</h6>
          </div>
        </div>
        <p className="justify-self-end">+${price < 10 ? <span>{price}/mo</span> : <span>{price}/yr</span>}</p>
      </div>
    </div>
  );
};

export default Card;
