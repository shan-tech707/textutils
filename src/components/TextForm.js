import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // convert to UpperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success")
  };

  // convert to LowerCase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  };

  // Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

// copy Text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Extra Space removal
  const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);// remove spaces and create an array
      setText(newText.join(" "));
      props.showAlert("Extra Spaces removed", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}>

        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((t)=>t !=="").length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter Something in the above preview here"}
        </p>
      </div>
    </>
  );
}
