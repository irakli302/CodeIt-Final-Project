"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleLogin  = (e) => {
    e.preventDefault();


    try {

      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if(res.token) {
            router.replace("/products");
          }
          else {
            console.log("Invalid login, please try again!");
          }
        })
    }
    catch(error) {
      console.log(error);
    };
  };


  const handleRegister = (e) => {

    e.preventDefault();
    const user = {
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "kilcoole",
        street: "new road",
        number: 7682,
        zipcode: "12926-3874",
      },
      id: 1,
      email: email,
      username: username,
      password: password,
      name: {
        firstname: "john",
        lastname: "doe",
      },
      phone: "1-570-236-7033",
      __v: 0,
    };  

    try {
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
          email: email,
        }),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.id) {
          router.replace("/products");
        }
        else {
          console.log("Registration failed.");
        }
      })
    }
    catch(error) {
      console.log(error);
    }
  };

  const loginChange = () => {
    return setLogin(!login);
  };
  return (
    <main className={styles.main}>
      <form className={styles.container}>
        {login ? (<>
          <h3 className={styles.signin}>Sign In</h3>
        <p className={styles.desc}>please sign in to access market.</p>
        <input
        onChange={(e) => {
          return setUsername(e.target.value)
        }}
         className={styles.input} 
         placeholder="username" />
        <input
          onChange={(e) => {
            return setPassword(e.target.value)
          }}
          className={styles.input}
          type="password"
          placeholder="password"
        />
          <button
          onClick={handleLogin }
          className={styles.button}>
            Sign In
          </button>
          <button 
          className={styles.Chamgesignuin}
          onClick={loginChange}
          >Not Registered? sign up
          </button>
        </> ) : ( <>
            <h3 className={styles.signupTitle}>Sign Up</h3>
            <p className={styles.description}>Sign up to continue</p>
              <label className={styles.label}>Enter your name: </label>
              <input 
              onChange={(e) => {
                return setUsername(e.target.value)
              }}
              className={styles.input} 
              placeholder="username">
              </input>
              <label className={styles.label}>Enter your Email: </label>
              <input 
              onChange={(e) => {
                return setEmail(e.target.value)
              }}
              className={styles.input} 
              type = "email" 
              placeholder="email">
              </input>
              <label className={styles.label}>Set password: </label>
              <input 
              onChange={(e) => {
                return setPassword(e.target.value)
              }}
              className={styles.input}
              type = "password" 
              placeholder="password">
              </input>
            <button 
            className={styles.button}
            onClick={handleRegister}
            >
              Sign Up
              </button>
            <button 
          className={styles.Chamgesignuin}
          onClick={loginChange}
          >Already Registered? sign in
          </button>
          </>)}
      </form>
    </main>
  );
}
