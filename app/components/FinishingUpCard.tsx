import React from "react";
import { plans } from "@/objects/plans";
import { AddOns } from "@/objects/addOns";
type params = {
  plan: string;
  subTime: string;
  addOns: string;
};
const Card = ({ plan, subTime, addOns }: params) => {
  let totalAddonsPrice = 0;
  const isMonth = subTime === "true" ? true : false;
  const selectedPlan = plans[Number(plan)];
  const arr = addOns.split(",");
  return (
    <div className="text-MarineBlue pt-10">
      <div className="bg-LightBlue p-6 rounded-xl">
        <div className="grid grid-cols-3">
          <p className="col-span-2 font-bold">
            {selectedPlan.Plan}({isMonth ? "Monthly" : "Yearly"})
          </p>

          <div className="justify-self-end font-bold">
            $
            {isMonth ? (
              <span>{selectedPlan.price}/mo</span>
            ) : (
              <span>{selectedPlan.price * 10}/yr</span>
            )}
          </div>
          <p className="text-sm underline pb-2 opacity-50">Change</p>
        </div>

        <hr />
        <div className="pt-3">
          {AddOns.map((AddOn, i) =>
            arr[i] === "true"
              ? ((totalAddonsPrice += AddOn.price),
                (
                  <div className="grid grid-cols-3">
                    <p className="col-span-2 opacity-50">{AddOn.name}</p>
                    <p className="justify-self-end">
                      {isMonth ? (
                        <span>${AddOn.price}/mo</span>
                      ) : (
                        <span>${AddOn.price * 10}/yr</span>
                      )}
                    </p>
                  </div>
                ))
              : ""
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 p-6">
        <p className="col-span-2 opcity-50">
          Total({isMonth ? "per month" : "per year"})
        </p>

        <div className="justify-self-end font-bold text-xl">
          $
          {isMonth ? (
            <span>{selectedPlan.price + totalAddonsPrice}/mo</span>
          ) : (
            <span>{(selectedPlan.price + totalAddonsPrice) * 10}/yr</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
