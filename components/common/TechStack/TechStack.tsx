"use client"
import React, { useEffect, useState } from 'react';

const platforms = [
  { name: 'Android', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg' },
  { name: 'iOS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg' },
  { name: 'Web', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'WatchOS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg' },
];

const technologies = [
  { name: 'Node.js', icon: 'https://nodejs.org/static/images/logo.svg' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.svg' },
  { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
];

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Startup Founder',
    review: 'TestFire’s professional testers ensured our Flutter app was bug-free and ready for launch in record time.',
    rating: 5,
  },
  {
    name: 'Priya Gupta',
    role: 'Product Manager',
    review: 'Their AI-driven testing and Vercel deployment made our Next.js app incredibly fast and reliable.',
    rating: 4,
  },
  {
    name: 'Rahul Verma',
    role: 'CTO',
    review: 'The AWS integration and JavaScript expertise from TestFire’s team was flawless. Highly professional!',
    rating: 5,
  },
];

const userReviews = [
  {
    name: 'Vikram Singh',
    review: 'The AI testing tools are a game-changer. My Android app passed all checks with zero crashes!',
    rating: 5,
  },
  {
    name: 'Anjali Mehta',
    review: 'TestFire’s testing suite caught edge cases in our iOS app that we missed. Super reliable!',
    rating: 4,
  },
  {
    name: 'Karan Desai',
    review: 'Next.js app testing was seamless. TestFire’s testers are true professionals!',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    review: 'Flutter app testing was quick and thorough. The results boosted our app store ratings!',
    rating: 5,
  },
];

export default function TechStackAndTestimonials() {
  const [userCount, setUserCount] = useState(0);

  // Counter animation for 3,50,000+ users
  useEffect(() => {
    const target = 350000;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setUserCount(target);
        clearInterval(timer);
      } else {
        setUserCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black py-16">
      {/* Dynamic Data Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Trusted by Millions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Join our global community of developers and testers using TestFire’s AI-driven platform.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            {userCount.toLocaleString()}+
          </div>
          <span className="text-2xl md:text-3xl text-gray-200">
            Users Using Our Services
          </span>
        </div>
      </section>

      {/* Technology Stack Section (Split into Platforms and Technologies) */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Our Technology Stack
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
          Powered by industry-leading platforms and technologies for robust and scalable app testing solutions.
        </p>

        {/* Platforms Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-2"
              >
                <img src={platform.icon} alt={platform.name} className="w-12 h-12 mb-4" />
                <span className="text-gray-200 font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-2"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-4" />
                <span className="text-gray-200 font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section (Auto-Scrolling Carousel) */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          What Our Clients Say
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-testimonials space-x-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.783.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.482 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 mb-4 italic">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <p className="text-gray-200 font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Review Section (Auto-Scrolling Carousel) */}
      {/* <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          User Reviews
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-reviews space-x-6">
            {[...userReviews, ...userReviews].map((review, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.783.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.482 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 mb-4 italic">"{review.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <p className="text-gray-200 font-semibold">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}