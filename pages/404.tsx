'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-8 px-4 md:px-8">
      <section className="max-w-md mx-auto">
        <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
          <div className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Page Not Found
            </h1>
            <p className="text-gray-400 mb-6">
              Sorry, the page you’re looking for doesn’t exist. Return to the
              dashboard or contact support for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white hover:from-blue-500 hover:via-purple-600 hover:to-pink-600">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <Link href="/support">
                <Button
                  variant="outline"
                  className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
