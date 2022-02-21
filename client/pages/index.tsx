import type { NextPage } from 'next'
import React, {lazy, Suspense} from 'react';
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
      
    )
}

export default Home
