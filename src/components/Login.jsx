import React, { useRef, useState } from "react";
import { heroBackground } from "../assets"; // Ensure your image path is correct
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const parallaxRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User successfully logged in
      const user = userCredential.user;
      console.log("User logged in:", user);

      navigate("/"); // Redirect to the home page

      // Redirect to the desired page after successful login
      navigate("/"); // Redirect to the /page route
    } catch (error) {
      setError(error.message);
      console.error("Error logging in:", error);
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
      {/* Div for Login Box */}
      <div className="relative z-10 w-full max-w-sm p-8 mx-4 bg-n-10 rounded-lg shadow-lg text-center">
        {/* Gradient Bars */}
        <Gradient />

        {/* Login Form */}
        <h2 className="text-lg font-bold text-white mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email} // Bind the input value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            className="w-full p-3 mb-4 rounded-md bg-n-8 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password} // Bind the input value to state
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            className="w-full p-3 mb-4 rounded-md bg-n-8 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
          />
          <Button type="submit" className="w-full">
            Login
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

export default Login;
