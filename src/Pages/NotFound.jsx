import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function NotFound() {
  return (
    <div className="bg-gray-800 h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <ExclamationTriangleIcon className="w-20 h-20 mx-auto text-red-500" />
        <Typography
          variant="h1"
          color="white"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          Error 404 <br /> It looks like something went wrong.
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-50 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it. Please try refreshing
          the page.
        </Typography>
        <Button
          color="gray"
          className="w-full px-4 md:w-[8rem] hover:bg-gray-700 hover:shadow-lg transition duration-300"
        >
          <a href="/" className="text-white">
            back home
          </a>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
