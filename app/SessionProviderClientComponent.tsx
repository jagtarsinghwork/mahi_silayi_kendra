"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
  expires?: string;
}

interface Props {
  children: ReactNode;
  session: Session | null;
}
