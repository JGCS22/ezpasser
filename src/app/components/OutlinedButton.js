"use client";
import React, { useState } from 'react';


export default function OutlinedButton({ text, onClick }) {

  const [hovered, setHovered] = useState(false);


  return (
    <div>
      <button 
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border-2 outline-8 px-2 py-1 rounded border-purple-800 text-purple-800 hover:text-purple-400 hover:border-purple-400 transition-colors'
      >
        {text}
      </button>
    </div>
  );
}