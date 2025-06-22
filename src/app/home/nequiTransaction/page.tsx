"use client";

import { Header } from "@/components/header/Header";
import { useRouter } from "next/navigation";

export default function NequiTransactionPage() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <Header handleGoBack={handleGoBack} />
    </div>
  );
}
