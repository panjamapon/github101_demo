import React from 'react';
const Home = () => {
  const image = "/323107666_539851201377435_8419949154319976999_n.jpg";

  return (
    <>
      <div className='table m-auto'>
        <div class="rotate-me" className="w-[300px] h-[300px] overflow-hidden mb-[100px]">
          <img className='w-full h-full' src={image} />
        </div>
        <br/>
        <p className='text-center text-[42px]'>
          Hello World
        </p>
      </div>
      <style>
        {
          `
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
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
export default Home;