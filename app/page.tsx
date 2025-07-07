import Header from "@/components/common/Header";
import RootLayout from "./layout";
import Link from "next/link";
import Home from "./root/page";
import TestAuth from "./test-auth/page";
// import { NavLinks } from "./ui/nav-links";

export default function Page(session: any) {
  return (
    <>
      
        <Home />
        {/* <NavLinks /> */}
        {/* <nav className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Page</h1>
            <p className="text-gray-700">This is a sample page content.

              
            </p>
            <Link href="/home" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Go to Home
            </Link>
          </div>
        </nav> */}

        {/* Add your page content here */}
      
    </>
  );
}
