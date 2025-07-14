"use client";
import React, { FC, ReactNode, useEffect } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const PublicAuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { token, isAuthenticating } = useAuth();
  const router = useRouter();

  //   if (isAuthenticating) {
  //     return <Skeleton className="h-full w-full" />;
  //   }

  // if (token) {
  //   router.push("/dashboard");
  // }
  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token, router]);
  return <>{children}</>;
};

export default PublicAuthLayout;
