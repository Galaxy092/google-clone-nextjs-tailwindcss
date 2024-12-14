import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40 flex flex-col items-center">
        <p className="text-lg mb-6 font-medium">Sign in to access the application</p>

        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="mb-4">
            {/* Render Google or GitHub-specific button styles */}
            {provider.name === 'Google' ? (
              <button
                className="flex items-center bg-white border border-gray-300 rounded-lg px-5 py-3 hover:bg-gray-100 shadow-md"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google Logo"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign in with Google
                </span>
              </button>
            ) : provider.name === 'GitHub' ? (
              <button
                className="flex items-center bg-gray-900 text-white rounded-lg px-5 py-3 hover:bg-gray-800 shadow-md"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.3 3.438 9.8 8.207 11.387.599.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.415-4.042-1.415-.545-1.383-1.333-1.75-1.333-1.75-1.09-.745.082-.73.082-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.836 2.807 1.306 3.492.998.108-.776.418-1.306.762-1.606-2.665-.304-5.466-1.33-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.231.956-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.29-1.554 3.296-1.231 3.296-1.231.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.476 5.92.43.371.815 1.104.815 2.224 0 1.605-.015 2.9-.015 3.293 0 .319.192.694.8.576C20.565 22.094 24 17.594 24 12.297 24 5.67 18.627.297 12 .297z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Sign in with GitHub</span>
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
