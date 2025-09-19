// src/components/ClusterLoader.jsx
import React from "react";

const ClusterLoader = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 bg-blue-500 rounded-sm animate-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ClusterLoader;
