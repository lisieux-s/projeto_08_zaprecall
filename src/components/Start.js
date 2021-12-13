import React from "react";

export default function Start(props) {
  return (
    <div class="start">
      <div>
        <img src="./assets/logo.png" alt="" />
      </div>
      <button className="start-button" onClick={() => props.setCurrentPage('flashcards')}>
          <p>Praticar React</p> <img src="./assets/next.png" alt="" />
      </button>
    </div>
  );
}
