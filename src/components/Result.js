export default function Result(result) {
  if (result === "success") {
    return (
      <div className="end-game">
        <p>PARABÉNS! 🥳 </p>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
    );
  } else {
    return (
      <div className="end-game">
        <p>Putz.. 🥳 </p>
        <p>
          Você esqueceu alguns flashcards.. <br />
          Não desanime! Na próxima você consegue!
        </p>
      </div>
    );
  }
}
