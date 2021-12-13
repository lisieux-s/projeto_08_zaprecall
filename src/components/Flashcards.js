import Flashcard from "./Flashcard";

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
          {Flashcard(deck[props.currentCard])}
      </div>
    );
}
