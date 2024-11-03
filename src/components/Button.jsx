import React from 'react'

const Button = ({text, color, onClick}) => {
    // logic
    const handleClick = () => {
        console.log('Click');
        onClick();
      };
    
  // view
  return (<div className="mt-auto py-12 w-full flex justify-center">
    <button
        className={`w-full py-4 px-1 block ${
          color ||'bg-medi-green' 
        } rounded-3xl text-white text-lg font-bold`}
        type="button"
        onClick={handleClick}
    >
      {text}
  </button>
  </div>
  );
  
};

export default Button;