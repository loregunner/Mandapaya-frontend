/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Homepage from "@/features/homePage/HomePage";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const userId = getCookie("userid") as any;
  useEffect(() => {
    if (userId) {
      router.push("/home");
    } else {
      router.push("/");
    }
  }, []);
  return <Homepage />;
};

export default Home;
