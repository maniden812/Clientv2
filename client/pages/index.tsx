import type { NextPage } from 'next'
import React, {lazy, Suspense} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { Router, useRouter } from 'next/router'
import {Navbar} from '../components/Navbar/Navbar'
import styles from './index.module.css'

const Home: NextPage = () => {
  const {data: session} = useSession()
  const router = useRouter();
  console.log("session" , session);
    return (
      
      <div>
        <Navbar />
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <h1 className = {styles.bigtext}>Track. Share. Save.</h1>
          <h1 className = { styles.smalltext }>Welcome to FuelQuote. Our platform is here to serve you better and faster. We will provide you the best prices and customer service. Created by Kevin Flores, Manasa Dendukuri, Chetana Pitani</h1>
        </div>

      </div>
      
      
      // <div className="flex flex-col items-center justify-center min-h-screen py-2">
      //   <Head>
      //     <title>Create Next App</title>
      //     <link rel="icon" href="/favicon.ico" />
      //   </Head>

      //   <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          
      //     

      //     <h1 className="text-6xl font-bold">
      //       Welcome to{' '}
      //       <a className="text-blue-600" href="https://nextjs.org">
      //         Next.js!
      //       </a>
      //     </h1>

      //     <p className="mt-3 text-2xl">
      //       Get started by editing{' '}
      //       <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
      //         pages/index.tsx
      //       </code>
      //     </p>

      //     <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      //       <a
      //         href="https://nextjs.org/docs"
      //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
      //       >
      //         <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
      //         <p className="mt-4 text-xl">
      //           Find in-depth information about Next.js features and API.
      //         </p>
      //       </a>

      //       <a
      //         href="https://nextjs.org/learn"
      //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
      //       >
      //         <h3 className="text-2xl font-bold">Learn &rarr;</h3>
      //         <p className="mt-4 text-xl">
      //           Learn about Next.js in an interactive course with quizzes!
      //         </p>
      //       </a>
            
      //     </div>
      //   </main>
      // </div>
    )
}

export default Home
