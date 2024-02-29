interface ICard {
  id: number;
  paragraph: string;
  details: string;
}

export const Card = (card: ICard) => {
  return (
    <div>
      <h1>Card Component {card.id}</h1>
      <p>{card.paragraph}</p>
      <p>{card.details}</p>
    </div>
  );
};
