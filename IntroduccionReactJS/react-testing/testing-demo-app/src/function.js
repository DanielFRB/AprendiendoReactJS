export function timesTwo(a) {
  return a * 2;
}

export function suma(a,b) {
  return a + b;
}

export function resta(a,b) {
  return a - b;
}

export function order(items) {
  const total = items.reduce(
    (price, item) => price + item.price,
    0
  );
  return {
    orderItems: items,
    total
  };
}