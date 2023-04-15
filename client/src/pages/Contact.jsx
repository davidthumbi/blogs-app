import React from 'react'

const Contact = () => {
  return (
    <div className="p-6 md:px-24 lg:px-80 lg:py-20">
      <h2 className="text-white text-3xl font-bold lg:text-4xl">
        Get In Touch
      </h2>
      <p className="text-gray-400 text-lg mt-6 lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="mt-6 border-2 border-gray-300 flex rounded-lg text-white text-xl lg:text-2xl">
        <input
          type="email"
          className="p-4 bg-gray-900 w-3/4 rounded-lg"
          placeholder="example@gmail.com"
        />
        <a
          href="mailto:thumbidavid78@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="w-32 p-4 pl-8 rounded-r-lg text-gray-900 font-bold uppercase bg-gray-300 md:w-52 lg:w-72"
        >
          Send
        </a>
      </div>
    </div>
  );
}

export default Contact