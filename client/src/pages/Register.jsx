import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    getNews: true,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.password != formData.confirmPassword
      ? console.log("Passwords do not match")
      : console.log(
          `Submitted successfully ${
            formData.getNews ? "Thanks for signing up for our newsletter" : ""
          }`
        );
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
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="John"
            id="firstName"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Doe"
            id="lastName"
            name="lastName"
            onChange={handleChange}
          />
        </div>
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex gap-2">
          <input
            type="checkbox"
            name="getNews"
            id="join"
            checked={formData.getNews}
            onChange={handleChange}
          />
          <label htmlFor="join" className="text-sm text-gray-400">
            I want to join the newsletter
          </label>
        </div>
        <div className="">
          <button className="w-full bg-gray-800 px-4 py-2 text-white rounded-md hover:bg-gray-700 mt-6">
            Sign Up
          </button>
        </div>
        <div className="mt-3">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
