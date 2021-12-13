let counter = 0;
export default function Flashcard(props) {
    counter++;
    return (
        <div className="flashcard front">
          <div className="counter">{counter}/8</div>
          <p>{props.Q}</p>
          <img src="./assets/turn.png" alt="turn card" onClick={() => props.setCurrentCard(currentCard+1)}/>
        </div>
    )

}

function turnCard() {

}
