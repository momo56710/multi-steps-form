import React from "react";
import Link from "next/link";
function ErrorPage() {
  return (
    <div className="p-6 grid gap-5 ">
      <h1 className="text-4xl font-bold text-MarineBlue">
        data didn't passed correctly
      </h1>
      <Link href={'/step-one'}>
        <button
          type="submit"
          className=" text-white bg-MarineBlue  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit  px-5 py-2.5 text-center self-end"
        >
          try again
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
