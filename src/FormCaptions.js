import React, { useState } from 'react';

const FormCaptions = ({ URL, setURL, setCaptions }) => {
  const [captions, setLocalCaptions] = useState([{ title: '', startTime: '', endTime: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newURL = e.target.url.value;
    setURL(newURL);
  };

  const handleCaptionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCaptions = [...captions];
    updatedCaptions[index][name] = value;
    setLocalCaptions(updatedCaptions);
    setCaptions(updatedCaptions); // Update captions in the App component
  };

  const handleAddCaption = () => {
    setLocalCaptions([...captions, { title: '', startTime: '', endTime: '' }]);
    setCaptions([...captions, { title: '', startTime: '', endTime: '' }]);
  };

  const handleRemoveCaption = (index) => {
    const updatedCaptions = [...captions];
    updatedCaptions.splice(index, 1);
    setLocalCaptions(updatedCaptions);
    setCaptions(updatedCaptions); // Update captions in the App component
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">URL:</label><br />
        <input type="url" id="url" name="url" required /><br /><br />
        {captions.map((caption, index) => (
          <div key={index}>
            <label htmlFor={`title${index}`}>Title:</label><br />
            <input
              type="text"
              id={`title${index}`}
              name="title"
              value={caption.title}
              onChange={(e) => handleCaptionChange(index, e)}
              required
            /><br />
            <label htmlFor={`startTime${index}`}>Start Time:</label><br />
            <input
              type="number"
              id={`startTime${index}`}
              name="startTime"
              value={caption.startTime}
              onChange={(e) => handleCaptionChange(index, e)}
              required
            /><br />
            <label htmlFor={`endTime${index}`}>End Time:</label><br />
            <input
              type="number"
              id={`endTime${index}`}
              name="endTime"
              value={caption.endTime}
              onChange={(e) => handleCaptionChange(index, e)}
              required
            /><br />
            {index > 0 && <button type="button" onClick={() => handleRemoveCaption(index)}>-</button>}
            <br /><br />
          </div>
        ))}
        <button type="button" onClick={handleAddCaption}>+</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormCaptions;
