"use client";
import { Skeleton } from "@/components/ui/Skeleton";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { FC, ReactNode, useEffect } from "react";

const CreatorAuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { token, isAuthenticating } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticating && !token) {
      router.push("/signin");
    }
  }, [isAuthenticating, token, router]);

  if (isAuthenticating && token) {
    return <Skeleton className="h-full w-full" />;
  }

  if (!token) {
    return null; // jab tak redirect ho raha hai, blank dikhaye
  }

  return <>{children}</>;
};

export default CreatorAuthLayout;
