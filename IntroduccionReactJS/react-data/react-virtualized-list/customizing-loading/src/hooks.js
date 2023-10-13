import { useState } from "react";

export const useIterator = (items = [], initialValue = 0) => {
  const [i, setIndex] = useState(initialValue);

  const prev = () => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }

  const next = () => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }

  return [i || items[0], prev, next];
}