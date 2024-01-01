import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const WishesDisplay = () => {
  // Array of wishes
  const wishes = ["first wish", "second wish", "third wish"];

  // State to track the current wish index
  const [currentWishIndex, setCurrentWishIndex] = useState(0);

  // Function to handle changing the wish
  const handleChangeWish = () => {
    const nextIndex = currentWishIndex + 1;

    // If there are more wishes, update the index
    if (nextIndex < wishes.length) {
      setCurrentWishIndex(nextIndex);
    }
  };

  // Get the current wish based on the index
  const currentWish = wishes[currentWishIndex];
  const navigate = useNavigate();
  return (
    <div>
      <p>Current Wish:</p>
      <p>{currentWish}</p>

      {currentWishIndex < wishes.length - 1 ? (
        // Button to change wish
        <button onClick={handleChangeWish}>Change Wish</button>
      ) : (
        // Message when all wishes are shown
        <p>Enough wishes for today</p>
      )}

      {currentWishIndex === wishes.length - 1 && (
        // Button to activate alert when all wishes are shown
        <button onClick={()=>navigate('/')}>
        Back to generate a new wish</button>
      )}
    </div>
  );
};

export default WishesDisplay;
