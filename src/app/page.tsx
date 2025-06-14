/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import NoSsr from "@/components/noSsr/NoSsr";
import Auth from "@/features/auth/Auth";
import Homepage from "@/features/homePage/HomePage";



const Page = () => {
  return (
    <NoSsr>
      <Auth />
    </NoSsr>
  );
};

export default Page;
