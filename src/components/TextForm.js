import React, { useState } from "react";

export default function TextForm(props) {
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");

  //UpperCase
  const upperCase = () => {
    // console.log("Enter your text" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  //LowerCase
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //TitleCase or Capitalised Form
  const intoTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
  };

  // Function to capitalise first letter
  const capitalize = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
  };

  //Speaking Text
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  //Clear Text
  const clear = () => {
    let newText = " ";
    setText(newText);
  };

  //Remove all the Symbol
  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;
    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
  };

  //To extract only the numbers in the text:
  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
  };

  //Copying Text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Text Copied");
  };

  //Handle ExtraSpaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  //Reverse the text
  const handleReverse = (event) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
  };

  const handle = (event) => {
    // console.log("handle fired");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <div className="textBox my-1 ">
          <h4 className="text my-3">{props.heading}</h4>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handle}
          ></textarea>
        </div>

        <button className="btn btn-secondary m-1" onClick={upperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-secondary m-1" onClick={lowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-secondary m-1" onClick={handleReverse}>
          Reverse
        </button>
        <button className="btn btn-secondary m-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-secondary m-1" onClick={intoTitleCase}>
          Convert to TitleCase
        </button>
        <button className="btn btn-secondary m-1" onClick={capitalize}>
          Convert to Capitalised
        </button>
        <button className="btn btn-secondary m-1" onClick={clear}>
          CLEAR
        </button>
        <button className="btn btn-secondary m-1" onClick={handletextExtract}>
          Remove Symbol
        </button>
        <button className="btn btn-secondary m-1" onClick={handleNumExtract}>
          Extract Number
        </button>
        <button className="btn btn-secondary m-1" onClick={handleExtraSpaces} >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-4">
        <h3>Your text summary</h3>
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>

        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
