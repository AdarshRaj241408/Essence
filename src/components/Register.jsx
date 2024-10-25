import React, { useRef, useState } from "react";
import { heroBackground } from "../assets"; // Ensure your image path is correct
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const parallaxRef = useRef(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User successfully registered
      const user = userCredential.user;
      console.log("User registered:", user);
      // Optionally, you can also store the username in your database
      navigate("/login"); // Redirect to the login page
      // ...
    } catch (error) {
      setError(error.message);
      console.error("Error registering:", error);
    }
  };

  return (
    <Section className="flex flex-col items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%]">
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
      {/* Adjusted Blank Space on Top */}
      <div className="h-16"></div> {/* Reduced height to decrease gap */}
      {/* Div for Registration Box */}
      <div className="relative z-10 w-full max-w-sm p-8 mx-4 bg-n-10 rounded-lg shadow-lg text-center">
        {/* Gradient Bars */}
        <Gradient />

        {/* Registration Form */}
        <h2 className="text-lg font-bold text-white mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 rounded-md bg-n-8 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-md bg-n-8 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded-md bg-n-8 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
          />
          <Button className="w-full" type="submit">
            Register
          </Button>
        </form>
      </div>
      {/* Div for Background Circles */}
      <div className="relative z-0">
        <BackgroundCircles parallaxRef={parallaxRef} />
      </div>
    </Section>
  );
};

export default Register;
