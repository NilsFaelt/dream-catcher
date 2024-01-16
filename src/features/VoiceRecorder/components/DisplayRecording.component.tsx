import React from "react";

export const DisplayRecording = () => {
  const breathingStyles = {
    color: "#ff0000", // Set your desired text color
    animation: "breath 2s infinite",
  };
  const divStyles = {
    color: "#ff0000", // Set your desired text color
    animation: "breathDiv 2s infinite",
  };

  return (
    <div
      style={divStyles}
      className=' border border-white opacity-80 bg-black p-3 rounded-md flex flex-row gap-5  '
    >
      <p className='pb-0.5 e' style={breathingStyles}>
        •
      </p>
      <p className='text-white '> RECORDING </p>
    </div>
  );
};

// Inline CSS (Styles)
const styles = `
  @keyframes breath {
    0%, 100% {
      transform: scale(1.6);
      opacity: 1.5;
    }
    50% {
      transform: scale(3);
      opacity: 0.6;
    }
  }
  @keyframes breathDiv {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
`;

if (typeof window !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}
