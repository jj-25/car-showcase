import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse car-card">
      <ul className="space-y-3">
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
        <h3
          className="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
          style={{ width: "40%" }}
        ></h3>
        <div>
          <span className="w-60 h-40 m-auto block bg-gray-200  dark:bg-gray-700"></span>
        </div>
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
      </ul>
    </div>
  );
};

export default LoadingSkeleton;
