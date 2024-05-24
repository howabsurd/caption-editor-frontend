import React from 'react';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import CaptionOverlay from './CaptionOverlay';

const Player = ({ captions, URL }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Update current time every second
    const interval = setInterval(() => {
      setCurrentTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='player'>
      {URL ? (
        <ReactPlayer
          url={URL}
          width="60%"
          // height="10%"
          playing={true} // Autoplay
          controls={true} // Enable controls
          onProgress={progress => setCurrentTime(progress.playedSeconds)} // Update current time
          config={{
            youtube: {
              playerVars: {
                controls: 1, // Show YouTube controls
                fs: 0, // Hide full-screen button
              },
            },
          }}
        />
      ) : (<>
        <h1 style={{ display: "block" }}>Video will play here</h1>
        {/* <h1 style={{ display: "block" }}>Get Ready for action!!</h1> */}
      </>
      )}
      {URL && <CaptionOverlay captions={captions} currentTime={currentTime} />}
    </div>
  );
};

export default Player;
