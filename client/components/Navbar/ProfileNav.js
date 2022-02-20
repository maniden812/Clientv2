import styles from './Navbar.module.css';
import { useSession, signIn, signOut } from "next-auth/react"
import { Router, useRouter } from 'next/router'



export const ProfileNav = () => {
    const {data: session} = useSession()
    const router = useRouter();
  return (
    <>
      <nav>
          <div >  
            <ul className={styles.nav}>
                <li className={styles.Title}><a  href="/">FuelQuote</a></li>
                <li className={styles.nav}><a  href="/FuleQuote">Place Order</a></li>
                <li className={styles.nav}><a  href="/profile">Profile</a></li>
                <li className={styles.nav}><a  href="/">Order History</a></li>
                {session ? <li className={styles.nav}><a onClick={() => signOut()}>Sign Out</a></li> : <li className={styles.nav}><a  href="/api/auth/signin">Sign In</a></li>}

            </ul>
            
          </div>
            
      </nav>
    </>
  );
};


