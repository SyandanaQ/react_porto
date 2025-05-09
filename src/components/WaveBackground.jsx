import React from 'react';
import Wavify from 'react-wavify';

function WaveBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: -1,
        height: '350px', // <-- tinggi container wajib diatur
        overflow: 'hidden',
      }}
    >
      <Wavify
        fill="rgba(0, 153, 255, 0.5)"
        style={{ width: '100%', height: '100%' }} // isi seluruh container
        options={{
          height: 20,     // posisi gelombang di SVG
          amplitude: 10,  // tinggi gelombang
          speed: 0.3,
          points: 4,
        }}
      />
    </div>
  );
}

export default WaveBackground;
