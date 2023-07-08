import Image from "next/image";
import React from "react";
import thankYouImg from '@/public/icon-thank-you.svg'
const Confirm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[25em] w-full h-full text-MarineBlue px-6">
      <Image className="inline" src={thankYouImg} alt="thank you svg" height={100} width={100} />
      <p className="text-3xl font-bold">Thank you!</p>
      <p className="opacity-50 text-center px-10">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
};

export default Confirm;
