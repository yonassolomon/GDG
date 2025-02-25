
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Note() {
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editOption, setEditOption] = useState("");
  const [noteStyle, setNoteStyle] = useState({});

  // Handle input text changes
  const eventHandler = (e) => {
    setNote(e.target.value);
  };

  // Simulate adding the note
  const eventAdd = () => {
    alert("Your note was added successfully");
  };

  // Clear the note
  const eventDelete = () => {
    setNote("");
  };

  // Enter editing mode
  const eventEdit = () => {
    setIsEditing(true);
  };

  // Handle dropdown selection change
  const handleOptionChange = (e) => {
    setEditOption(e.target.value);
  };

  // Apply the selected edit option to update the note's style
  const applyEdit = () => {
    if (editOption === "colorChange") {
      // For example: change the text color to red
      setNoteStyle((prevStyle) => ({ ...prevStyle, color: "red" }));
    } else if (editOption === "fontChange") {
      // For example: change the font family
      setNoteStyle((prevStyle) => ({
        ...prevStyle,
        fontFamily: "Courier New, monospace",
      }));
    } else if (editOption === "backgroundChange") {
      // For example: change the background color to yellow
      setNoteStyle((prevStyle) => ({ ...prevStyle, backgroundColor: "yellow" }));
    }
    // Exit editing mode and reset the selection
    setIsEditing(false);
    setEditOption("");
  };

  return (
    <div className="noteContainer">
      {!isEditing ? (
        <>
          <input
            className="noteInput"
            type="text"
            value={note}
            onChange={eventHandler}
            style={noteStyle}
          />
          <button onClick={eventAdd}>ADD</button>
          <button onClick={eventDelete}>Delete</button>
          <button onClick={eventEdit}>Edit</button>
        </>
      ) : (
        <div className="editForm">
          <select value={editOption} onChange={handleOptionChange}>
            <option value="">Select an edit option</option>
            <option value="colorChange">Color Change</option>
            <option value="fontChange">Font Change</option>
            <option value="backgroundChange">Background Change</option>
          </select>
          <button onClick={applyEdit}>Apply</button>
        </div>
      )}
    </div>
  );
}

export default Note;

