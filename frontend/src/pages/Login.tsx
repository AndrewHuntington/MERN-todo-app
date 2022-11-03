import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="text-center w-[90%] mx-auto lg:max-w-3xl">
      <section className="w-full font-bold mb-12 px-5">
        <h1 className="flex justify-center text-4xl mb-5">
          <FaSignInAlt className="mr-1" /> Login
        </h1>
        <p className="text-2xl text-gray-500">Login to make your todo list</p>
      </section>

      <section className="w-full font-light">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input
              className="border rounded-md px-2 py-2 w-11/12"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="border rounded-md px-2 py-2 w-11/12"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
          <div>
            <button
              className="border rounded-md px-2 py-2 w-11/12 text-white bg-black font-bold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Login;
