import React from 'react';

const Chart = () => {
  return (
    <div className="font-sans text-center m-5">
      <h1 className="text-2xl font-bold">Organization Chart</h1>
      <div className="inline-block p-5 relative bg-contain">
        <div className="inline-flex flex-col items-center gap-2.5 p-5">
          <div className="bg-red-600 text-white py-1 px-2 rounded whitespace-nowrap z-20">Super Admin</div>
          <div className="mt-2.5">Fotokopi Group</div>
          <img src="path-to-your-image.jpg" alt="Super Admin" className="w-25 h-25 rounded-full border-3 border-blue-500 p-0.75 bg-white z-10"/>
        </div>
      </div>
      <button className="bg-green-500 text-white border-none py-2 px-5 rounded cursor-pointer mt-5 mx-auto block">Export</button>
    </div>
  );
};

export default Chart;
