import { useState } from "react";

import { Toggle } from "./components/Toggle";
import { Card } from "./components/Card";

import { cardInfors } from "./cardsInfor";

function App() {
  const [type, setType] = useState("annually");
  const [selectedCardIndex, setSelectedCardIndex] = useState(1);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedCardIndex(index);
    }
  };

  const handleKeyNavigation = (e) => {
    if (e.key === "ArrowRight") {
      setSelectedCardIndex((prev) => (prev + 1) % cardInfors.length);
    } else if (e.key === "ArrowLeft") {
      setSelectedCardIndex(
        (prev) => (prev - 1 + cardInfors.length) % cardInfors.length
      );
    }
  };

  return (
    <div
      className="flex flex-col gap-6 max-md:py-16 items-center justify-center w-screen max-md:h-full md:h-screen"
      onKeyDown={handleKeyNavigation}
      tabIndex={0}
    >
      <h1 className="text-2xl font-bold text-neutral-grayish-blue">
        Our Pricing
      </h1>
      <Toggle currentType={type} setType={setType} />
      <div className="flex items-center gap-1 mt-10 max-md:flex-col max-md:gap-4 max-md:w-full ">
        {cardInfors.map((card, index) => (
          <Card
            key={index}
            type={card.type}
            price={card.prices[type]}
            sendUp={card.sendUp}
            userAlloweds={card.usersAlloweds}
            storage={card.storage}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
