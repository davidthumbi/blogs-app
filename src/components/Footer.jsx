import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white flex p-2 justify-center min-h-screen">
      <p>© {new Date().getFullYear()} Tech Monday, Inc.</p>
    </div>
  );
}

export default Footer