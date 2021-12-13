import { useState } from "react";
import ReactDOM from "react-dom";
import Start from "./components/Start";
import Flashcards from "./components/Flashcards";

export default function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [currentCard, setCurrentCard] = useState('0');
    return (
        <div>
            {currentPage === "start" ? 
            <Start currentPage={currentPage} setCurrentPage={setCurrentPage}/> : 
            <Flashcards currentCard={currentCard} setCurrentCard={setCurrentCard} />}
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));