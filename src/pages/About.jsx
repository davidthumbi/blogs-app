import React from "react";

const About = () => {
  return (
    <div className="p-6 md:px-24 lg:px-80 lg:py-20">
      <h2 className="text-white text-3xl font-bold lg:text-4xl">About Tech Monday</h2>
      <p className="text-gray-400 text-lg mt-6 lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        laborum repellendus! At fugit officia incidunt tempore reiciendis totam
        doloremque nisi eum perferendis dolorum tempora laudantium architecto
        perspiciatis placeat nam suscipit corrupti qui quis id voluptas, iure
        natus necessitatibus! Hic, soluta. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sit rerum iste rem tempore.
      </p>
      <div className="mt-6 flex text-white text-xl gap-2 underline lg:text-2xl">
        <a href="https://github.com/davidthumbi" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/david-thumbi-08569a22b/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
