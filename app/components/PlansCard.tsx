"use client";

import React from "react";
import Image from "next/image";
type plan = {
  image: string;
  name: string;
  month: number;

  isMonth: boolean;
};
const Card = ({ image, name, month, isMonth }: plan) => {
  return (
    <div className="max-md:flex max-md:gap-3">
      <Image src={image} width={50} height={50} alt={name} />
      <div className="md:absolute bottom-2">
        <h2 className="font-bold md:pt-9">{name}</h2>
        <p>
          {isMonth ? (
            <span className="opacity-50">${month}/mo</span>
          ) : (
            <>
              <span className="opacity-50">${month}0/yr</span> <br />2 months
              free
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
