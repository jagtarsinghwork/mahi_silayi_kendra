'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function VerificationPage() {
  const router = useRouter();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [clicks, setClicks] = useState<{ x: number; y: number; type: string }[]>([]);

  // Simulate verification process (30 seconds)
  const verificationDuration = 30; // in seconds
  useEffect(() => {
    // Save start time to local storage
    const startTime = Date.now();
    localStorage.setItem('verificationStartTime', startTime.toString());

    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeElapsed(elapsed);

      if (elapsed >= verificationDuration) {
        setIsVerified(true);
        toast.success('Verification complete! Redirecting to dashboard...');
        setTimeout(() => router.push('/dashboard'), 2000);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  // Handle click/touch interactions
  const handleInteraction = (e: React.MouseEvent | React.TouchEvent, type: 'click' | 'touch') => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let x, y;
    if (type === 'click') {
      x = (e as React.MouseEvent).clientX - rect.left;
      y = (e as React.MouseEvent).clientY - rect.top;
    } else {
      x = (e as React.TouchEvent).touches[0].clientX - rect.left;
      y = (e as React.TouchEvent).touches[0].clientY - rect.top;
    }
    setClicks([...clicks, { x, y, type }]);
    setTimeout(() => setClicks((prev) => prev.slice(1)), 1000); // Remove effect after 1s
  };

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center py-16 relative overflow-hidden"
      onClick={(e) => handleInteraction(e, 'click')}
      onTouchStart={(e) => handleInteraction(e, 'touch')}
    >
      <section className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Orbiting Particles Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-20 h-20 rounded-full bg-blue-400/20 blur-xl animate-orbit" style={{ top: '10%', left: '20%' }}></div>
          <div className="absolute w-16 h-16 rounded-full bg-purple-500/20 blur-xl animate-orbit" style={{ top: '60%', right: '15%', animationDelay: '1s' }}></div>
          <div className="absolute w-24 h-24 rounded-full bg-pink-500/20 blur-xl animate-orbit" style={{ bottom: '20%', left: '30%', animationDelay: '2s' }}></div>
        </div>

        {/* Click/Touch Effects */}
        {clicks.map((click, index) => (
          <div
            key={index}
            className={`absolute w-10 h-10 rounded-full pointer-events-none ${
              click.type === 'click' ? 'animate-ripple' : 'animate-burst'
            }`}
            style={{
              top: click.y,
              left: click.x,
              background: click.type === 'click' ? 'radial-gradient(circle, rgba(96,165,250,0.5), transparent)' : 'radial-gradient(circle, rgba(236,72,153,0.5), transparent)',
            }}
          ></div>
        ))}

        {/* Main Content */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg animate-[fadeIn_0.5s_ease-in]">
          <Loader2 className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-spin" />
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {isVerified ? 'Verification Complete!' : 'Verifying Your Submission...'}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.2s' }}>
            {isVerified
              ? 'Your submission has been verified. You’ll be redirected to your dashboard shortly.'
              : 'We’re verifying your email and app details. This usually takes up to 30 seconds. Click or tap anywhere to interact!'}
          </p>
          <div className="mb-8 animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl font-bold text-gray-200 mb-2">Time Elapsed: {timeElapsed}s</div>
            <div className="text-gray-400">Estimated Time Remaining: {Math.max(0, verificationDuration - timeElapsed)}s</div>
            <div className="w-full bg-gray-700 rounded-full h-4 mt-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-1000"
                style={{ width: `${(timeElapsed / verificationDuration) * 100}%` }}
              ></div>
            </div>
          </div>
          {isVerified && (
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition animate-[fadeIn_0.5s_ease-in]"
              style={{ animationDelay: '0.4s' }}
            >
              Go to Dashboard
              <CheckCircle className="w-5 h-5 ml-2" />
            </Link>
          )}
        </div>
        <div className="text-center mt-6 animate-[fadeIn_0.5s_ease-in]" style={{ animationDelay: '0.5s' }}>
          <Link
            href="/submit-app"
            className="text-gray-400 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition"
          >
            Back to Submission Process
          </Link>
        </div>
      </section>
    </div>
  );
}