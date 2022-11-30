import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>

      <div className="intro">
        <p>
          Created By <span className="into">@Aknandan Kumar </span>2022 All rights reserved.
        </p>
      </div>
    </div>
  );
}
