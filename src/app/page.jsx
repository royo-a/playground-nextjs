'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [numberSet, setNumberSet] = useState(new Set());
  let setSize = 0;

  const addToSet = () => {
    setNumberSet((set) => {
      let newSet = new Set(numberSet);
      newSet.add(numberSet.size + 1);
      return newSet;
    });
  };

  useEffect(() => {
    setSize++;
    console.log(setSize);
  }, []);

  return (
    <div>
      <button
        className="border-2 rounded px-4 py-1 bg-green-300"
        onClick={addToSet}
      >
        Add number to set
      </button>
    </div>
  );
}
