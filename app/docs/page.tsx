import React from 'react';
import DocsSidebar from '@/components/common/DocsSidebar/index';
import CodeBlock from '@/components/common/CodeBlock/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TestFire Documentation | Humint',
  description:
    'Comprehensive guides for integrating and using TestFire’s AI-driven testing API. Learn how to automate mobile app testing with our scalable solutions.',
  openGraph: {
    title: 'TestFire Documentation',
    description: 'Guides for TestFire API integration and usage.',
    url: 'https://testfire.ai/docs',
  },
};

export default function DocsPage() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Welcome to TestFire Docs
          </h2>
          <p className="text-gray-400 mb-6">
            TestFire, a Humint product, offers an AI-driven platform for mobile app testing. This documentation provides step-by-step guides to integrate our API and automate testing workflows.
          </p>
          <p className="text-gray-400">
            Start with our <a href="#integration" className="text-orange-500 hover:underline">API Integration</a> guide to get up and running quickly.
          </p>
        </>
      ),
    },
    {
      id: 'integration',
      title: 'API Integration',
      content: (
        <>
          <h2 className="text-3xl font-bold mb-4">Integrating TestFire API</h2>
          <p className="text-gray-400 mb-6">
            Follow these steps to integrate TestFire’s API into your project. Obtain an API key from your <a href="/dashboard" className="text-orange-500 hover:underline">TestFire Dashboard</a>.
          </p>
          <h3 className="text-xl font-bold mb-2">Step 1: Install Dependencies</h3>
          <p className="text-gray-400 mb-4">Install the TestFire SDK using npm or yarn.</p>
          <CodeBlock
            language="bash"
            code={`npm install testfire-sdk`}
          />
          <h3 className="text-xl font-bold mb-2 mt-6">Step 2: Initialize the SDK</h3>
          <p className="text-gray-400 mb-4">Set up the SDK with your API key.</p>
          <CodeBlock
            language="typescript"
            code={`import { TestFire } from 'testfire-sdk';

const testfire = new TestFire({
  apiKey: 'YOUR_API_KEY',
  environment: 'production',
});`}
          />
          <h3 className="text-xl font-bold mb-2 mt-6">Step 3: Run a Test</h3>
          <p className="text-gray-400 mb-4">Use the SDK to run an automated test on your app.</p>
          <CodeBlock
            language="typescript"
            code={`async function runTest() {
  try {
    const result = await testfire.runTest({
      appId: 'your-app-id',
      testType: 'ui',
      devices: ['iPhone 14', 'Samsung Galaxy S23'],
    });
    console.log('Test Result:', result);
  } catch (error) {
    console.error('Test Failed:', error);
  }
}

runTest();`}
          />
        </>
      ),
    },
    {
      id: 'advanced',
      title: 'Advanced Usage',
      content: (
        <>
          <h2 className="text-3xl font-bold mb-4">Advanced API Features</h2>
          <p className="text-gray-400 mb-6">
            Explore advanced features like parallel testing, custom test scripts, and analytics integration.
          </p>
          <h3 className="text-xl font-bold mb-2">Parallel Testing</h3>
          <p className="text-gray-400 mb-4">Run multiple tests simultaneously to save time.</p>
          <CodeBlock
            language="typescript"
            code={`async function runParallelTests() {
  const tests = [
    testfire.runTest({ appId: 'app1', testType: 'ui' }),
    testfire.runTest({ appId: 'app2', testType: 'performance' }),
  ];
  const results = await Promise.all(tests);
  console.log('Parallel Test Results:', results);
}

runParallelTests();`}
          />
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      <DocsSidebar sections={sections} />
      <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
            {section.content}
          </section>
        ))}
      </main>
    </div>
  );
}