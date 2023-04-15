import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white text-center p-10 mt-auto">
      <p>© {new Date().getFullYear()} Tech Monday, Inc.</p>
    </div>
  );
}

export default Footer