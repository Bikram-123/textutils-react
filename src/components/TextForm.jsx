import React, { useState } from "react";

function TextForm(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleRClick = () => {
    let newText = text.replace(ftext, rtext);
    setText(newText);
    props.showAlert("Text Replaced", "success");
  };

  const [text, setText] = useState("");
  const [ftext, setFText] = useState("");
  const [rtext, setRText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnfindChange = (e) => {
    setFText(e.target.value);
  };
  const handleOnreplaceChange = (e) => {
    setRText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="7"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
              paddingLeft: "2px",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>Enter the word to find and replace</h3>
        <textarea
          className="form-control my-2"
          id="mybox"
          rows="1"
          value={ftext}
          onChange={handleOnfindChange}
          placeholder="Enter the word to find"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <textarea
          className="form-control my-2"
          id="mybox"
          rows="1"
          value={rtext}
          onChange={handleOnreplaceChange}
          placeholder="Enter the word to replace"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <button className="btn btn-primary" onClick={handleRClick}>
          Replace Word
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}

export default TextForm;
