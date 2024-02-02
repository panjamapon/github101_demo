import React from 'react';
const Template = (props) => {
  return (
    <>
      <div className='table m-auto'>
        <div class="rotate-me" className="w-[300px] h-[300px] overflow-hidden mb-[100px]">
          <img className='w-full h-full' src={props.image} />
        </div>
        <br/>
        <p className='text-center text-[42px]'>
          Hello {props.name}
        </p>
      </div>
      <style>
        {
          `
        
        .rotate-me {
          width: 500px;
          height: 500px;
          background-color: #3498db;
          animation: rotate 2s linear infinite; /* 2s duration, linear timing, infinite loop */
        }
        `
        }
      </style>
    </>
  )
}
export default Template;