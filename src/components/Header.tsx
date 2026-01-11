import React from "react";

export const Header = () => {
  const currentTime = new Date().toLocaleString();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">IEM GCEK</h1>
        <p className="text-blue-100 mt-2">
          Real-time energy consumption dashboard
        </p>
        <p className="text-sm text-blue-200 mt-2">{currentTime}</p>
      </div>
    </div>
  );
};
