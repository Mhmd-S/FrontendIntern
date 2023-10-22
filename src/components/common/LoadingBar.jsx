import React, { useEffect, useState } from 'react';

const LoadingBar = ({percentage}) => {
  const [perc, setPercentage] = useState();

  // Simulate an increase in the percentage over time (for demonstration)
  // In a real application, you should update the percentage based on your actual data or logic.
  useEffect(()=>{
    setPercentage(percentage)
  }, [percentage])

  return (
    <div className='w-3/4'>
      <div className="w-full h-3 bg-[#385682] rounded-lg">
        <div
          style={{ width: `${perc}%` }}
          className="relative h-full bg-[#5297FF] rounded-lg"
        >
          <div className="absolute right-0 shadow-[0px_0px_35px_15px_#5297ffa5]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;
