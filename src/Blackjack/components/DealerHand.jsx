function DealerHand({ dealerCards }) {
  return (
    <div>
      <h2>Dealer Hand</h2>
      <div className="flex">
        {dealerCards.map((card, index) => {
          if (index === 0) {
            return <p className="card" key={index}></p>;
          } else {
            return (
              <p className="card" key={index}>
                {card}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DealerHand;
