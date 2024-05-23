import { useEffect } from "react";

function CaptionOverlay({ captions, currentTime }) {
    // Find all captions that match the current time
    const matchingCaptions = captions.filter(
      caption => currentTime >= caption.startTime && currentTime <= caption.endTime
    );
  useEffect(()=>{
    console.log(captions)
  },[captions])
    return (
      <div className="caption-overlay">
        {matchingCaptions.map((caption, index) => (
          <div key={index} className="caption">
            {caption.title}
          </div>
        ))}
      </div>
    );
  }
  

export default CaptionOverlay;


