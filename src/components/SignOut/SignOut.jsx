"use client"
import styles from './SignOut.module.css'

import { useRouter } from "next/navigation";

const SignOut = () => {
    const router = useRouter();
    const signOut = () => {
        router.replace('/');
        localStorage.removeItem('user');
    }
    return <button className={styles.signOutButton} onClick={signOut}>Sign Out</button>
}

export default SignOut;