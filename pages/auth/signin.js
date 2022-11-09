import React from 'react'
import Header from "../../components/Header"
import { getProviders, signIn } from "next-auth/react"

export default function signin({providers}) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map(provider => (
          <div key={provider.name} className="flex flex-col items-center">
            <img className='w-52 object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" alt="" />
            <p className='text-sm my-10 text-center'>Test Google Clone with NextJS</p>
            <button className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500' onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}