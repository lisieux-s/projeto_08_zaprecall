//import Flashcard from "./Flashcard";
import { useState } from "react";
import Result from "./Result";

const deck = [
  {
    Q: "O que é JSX?",
    A: "Uma extensão de linguagem do JavaScript",
  },
  {
    Q: " O React é __ ",
    A: "uma biblioteca JavaScript para construção de interfaces",
  },
  { Q: "Componentes devem iniciar com __", A: "letra maiúscula" },
  { Q: "Podemos colocar __ dentro do JSX", A: "expressões" },
  {
    Q: "O ReactDOM nos ajuda __",
    A: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    Q: "Usamos o npm para __",
    A: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    Q: "Usamos props para __",
    A: "passar diferentes informações para componentes",
  },
  {
    Q: "Usamos estado (state) para __ ",
    A: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

export default function Flashcards(props) {
  return (
    <div className="flashcards">
      <header>
        <img src="./assets/logo-mini.png" alt="ZapRecall logo" />
      </header>
      
      <Flashcard
      setCurrentCard={props.setCurrentCard}
      currentCard={props.currentCard}
      deck={deck[props.currentCard]}
      />
      
    </div>
  );
}
let counter = 1;
function Flashcard(props) {
  const nCardsNotRemembered = 0;
  const [flipped, setFlipped] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [borderColor, setBorderColor] = useState("");
  const [result, setResult] = useState("success");
  const [deckFinished, setDeckFinished] = useState(false);

  function handleClick(props) {
    let color = props.target.className;
    setButtonClicked(true);
    setBorderColor(color);
    if(color === "red") {
      setResult("failure")
    }
  }

  function nextFlashcard(card, setCard) {
    if (counter < deck.length) {
      setFlipped(false);
      setButtonClicked(false);
      setBorderColor("");
      setCard(card + 1);
      counter++;
    } else {
      if(result === "success") {
        //render success
      } else {
        //render failure
      }
    }
  }

  {
    if (!flipped) {
      return (
        <div className="flashcard front">
          <div className="counter">
            {counter}/{deck.length}
          </div>
          <p>{props.deck.Q}</p>
          <img
            src="./assets/turn.png"
            alt="turn card"
            onClick={() => setFlipped(true)}
          />
        </div>
      );
    } else {
      if (!buttonClicked) {
        return (
          <div className="flashcard back {borderColor}">
            <div className="counter">
              {counter}/{deck.length}
            </div>
            <p>{props.deck.Q}</p>
            <p>{props.deck.A}</p>
            <div className="buttons">
              <button className="black" onClick={handleClick}>
                Aprendi agora
              </button>
              <button className="red" onClick={handleClick}>
                Não lembrei
              </button>
              <button className="green" onClick={handleClick}>
                Lembrei com esforço
              </button>
              <button className="yellow" onClick={handleClick}>
                Zap!
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flashcard back {borderColor}">
            <div className="counter">
              {counter}/{deck.length}
            </div>
            <p>{props.deck.Q}</p>
            <p>{props.deck.A}</p>
            <img
              src="./assets/turn.png"
              alt="turn card"
              onClick={() =>
                nextFlashcard(props.currentCard, props.setCurrentCard)
              }
            />
          </div>
        );
      }
    }
  }
}
