import React from "react";
import Wavify from "react-wavify";

function WaveBackground() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        bottom: 0,
        left: 0,
        zIndex: -1,
        height: "300px",
        overflow: "hidden",
      }}
    >
      {/* Definisikan gradient dalam SVG tersembunyi */}
      <svg style={{ height: 0, width: 0 }}>
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#cbe8ff" />
            <stop offset="100%" stopColor="rgba(0, 153, 255, 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wavify tetap di luar SVG */}
      <Wavify
        fill="url(#waveGradient)"
        paused={false}
        options={{
          height: 20,
          amplitude: 10,
          speed: 0.3,
          points: 2,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default WaveBackground;
