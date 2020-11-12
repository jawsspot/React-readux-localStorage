import React from "react";
import Ul from "./components/Ul";
import AddComments from "./components/AddComments";
import "./App.css";


function NoteApp() {
  
    return (
      <div className="container">
        <AddComments />
        
        <ul>
          <Ul />
        </ul>
      </div>
    );
}

export default NoteApp;
