
import React from "react";

function LimitedList() {
  const numbers = [1, 2, 3, 4, 5];

  // Filter and transform the array outside JSX
  const limitedNumbers = numbers
    .filter((_, index) => index < 3)
    .map((num) => <li key={num}>{num}</li>);

  return (
    <div>
      <h1>Filtered Numbers:</h1>
      <ul>{limitedNumbers}</ul>
    </div>
  );
}

export default LimitedList;
