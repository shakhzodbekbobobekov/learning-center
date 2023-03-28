import { useRef, useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardName, setCardName] = useState("");

  const cvcCard = useRef();
  const textCard = useRef();

  const cardNumber = (e) => {
    const val = e.target.value;
    setNumber(val);

    if (val.length === 16) {
      cvcCard.current.focus();
    }
  };
  const cardNumberCVC = (e) => {
   const cvcValue = (e.target.value);
   setCardCVC(cvcValue)
   if(cvcValue.length === 3){
    textCard.current.focus()
   }
  };

  const cardNumberName = (e) => {
    setCardName(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="number"
          placeholder="number"
          onChange={cardNumber}
          value={number}
        />
        <input
          ref={cvcCard}
          type="number"
          placeholder="cvc"
          onChange={cardNumberCVC}
          value={cardCVC}
        />
        <input
          ref={textCard}
          type="text"
          placeholder="name card"
          onChange={cardNumberName}
          value={cardName}
        />
      </form>
    </div>
  );
}

export default App;
