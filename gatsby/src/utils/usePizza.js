import { useState } from 'react';

export default function usePizza({ pizzas, input }) {
  // 1. Create some state to hold order
  const [order, setOrder] = useState([]);
  // 2. Make function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Make function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // Everything before the item we want to remove
      ...order.slice(0, index),
      // Everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send data to a serverless function when they checkout
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
