// src/components/ClusterLoader.jsx
import React from "react";

const CELLS = Array.from({ length: 9 }, (_, i) => i);

const ClusterLoader = () => {
  return (
    <div className="flex items-center justify-center h-64" aria-busy="true">
      <div className="grid grid-cols-3 gap-2">
        {CELLS.map((i) => (
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
