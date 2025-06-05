"use client";

import NoSsr from "@/components/noSsr/NoSsr";
import Auth from "@/features/auth/Auth";



const HomePage = () => {
  return (
    <NoSsr>
      <Auth />
    </NoSsr>
  );
};

export default HomePage;
