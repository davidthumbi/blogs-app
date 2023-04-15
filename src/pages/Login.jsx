import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted successfully");
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-32">
      <form
        className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button className="w-full bg-gray-800 px-4 py-2 text-white rounded-md hover:bg-gray-700 mt-6">
            Sign In
          </button>
        </div>
        <div className="mt-3">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
