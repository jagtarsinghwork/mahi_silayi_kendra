"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Users,
  Settings,
  FileText,
  Activity,
  LogOut,
  Building,
  User,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { useUserRequest } from "@/hooks/auth";

interface User {
  id: string;
  email: string;
  name: string;
  dashboardType?: "company" | "individual";
}

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();
  const { isAuthenticated, isAuthenticating, logout } = useContext(AuthContext);
  const { data: userData, isLoading, error } = useUserRequest();

  console.log("userData=--", userData);
  useEffect(() => {
    if (isAuthenticating || isLoading) return;

    if (!isAuthenticated) {
      toast.error("Please sign in to access the dashboard.");
      router.push("/signin");
      return;
    }

    const dashboardType = userData?.data?.data?.role;

    if (dashboardType) {
      setShowModal(false);
      router.push(`/dashboard`);
    }
  }, [isAuthenticating, isAuthenticated, userData, isLoading, router]);

  const handleSelection = async (selection: "company" | "individual") => {
    setShowModal(false);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/update-dashboard-type`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ dashboardType: selection }),
        }
      );
      if (!response.ok) throw new Error("Failed to update dashboard type");
      toast.success(`Selected ${selection} dashboard!`);
      router.push(`/${selection}-dashboard`);
    } catch (error) {
      toast.error("Error saving dashboard type. Redirecting...");
      console.error("Error saving dashboard type:", error);
      router.push(`/${selection}-dashboard`);
    }
  };

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    router.push("/login");
  };

  if (isLoading || isAuthenticating) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-in]">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          <p className="text-gray-400 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center animate-[fadeIn_0.5s_ease-in]">
          <p className="text-red-500 text-lg">Error: {error.message}</p>
          <Link
            href="/submit-app"
            className="text-gray-400 hover:text-blue-500 transition mt-4 inline-block"
          >
            Back to Submission
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-6 bg-gray-900">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">DELHI365</span>
        </Link>
        <ul className="flex space-x-8 items-center">
          <li>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-blue-500 transition text-lg"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-gray-400 hover:text-blue-500 transition text-lg"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/docs"
              className="text-gray-400 hover:text-blue-500 transition text-lg"
            >
              Docs
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-blue-500 transition text-lg flex items-center"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-[fadeIn_0.5s_ease-in]">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg text-center space-y-6 max-w-md w-full animate-[fadeIn_0.5s_ease-in] border border-gray-700">
            <h2 className="text-2xl font-bold text-white">
              Choose Your Dashboard
            </h2>
            <p className="text-gray-400">
              Select whether you're managing a company or an individual account.
            </p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => handleSelection("company")}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold animate-[fadeIn_0.5s_ease-in] flex items-center"
                style={{ animationDelay: "0.2s" }}
              >
                <Building className="w-5 h-5 mr-2" />
                Company
              </button>
              <button
                onClick={() => handleSelection("individual")}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold animate-[fadeIn_0.5s_ease-in] flex items-center"
                style={{ animationDelay: "0.3s" }}
              >
                <User className="w-5 h-5 mr-2" />
                Individual
              </button>
            </div>
          </div>
        </div>
      )}

      {!showModal && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <main>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white animate-[fadeIn_0.5s_ease-in]">
              WELCOME TO YOUR DELHI365 DASHBOARD
            </h1>
            <p
              className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: "0.2s" }}
            >
              Manage your apps, track testing progress, and view detailed
              reports with delhi 365 AI-driven platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/dashboard/users"
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-lg hover:bg-gray-700 transition-transform hover:-translate-y-2 animate-[fadeIn_0.5s_ease-in]"
                style={{ animationDelay: "0.3s" }}
              >
                <Users className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Users</h3>
                <p className="text-gray-400">
                  Manage users and their permissions.
                </p>
              </Link>
              <Link
                href="/dashboard/settings"
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-lg hover:bg-gray-700 transition-transform hover:-translate-y-2 animate-[fadeIn_0.5s_ease-in]"
                style={{ animationDelay: "0.4s" }}
              >
                <Settings className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Settings</h3>
                <p className="text-gray-400">Configure application settings.</p>
              </Link>
              <Link
                href="/dashboard/reports"
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-lg hover:bg-gray-700 transition-transform hover:-translate-y-2 animate-[fadeIn_0.5s_ease-in]"
                style={{ animationDelay: "0.5s" }}
              >
                <FileText className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Reports</h3>
                <p className="text-gray-400">View and generate reports.</p>
              </Link>
              <Link
                href="/dashboard/logs"
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-lg hover:bg-gray-700 transition-transform hover:-translate-y-2 animate-[fadeIn_0.5s_ease-in]"
                style={{ animationDelay: "0.6s" }}
              >
                <Activity className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Logs</h3>
                <p className="text-gray-400">
                  View system logs and activities.
                </p>
              </Link>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
