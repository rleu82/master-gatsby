import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, input }) {
  // 1. Create some state to hold order
  // Line removed: Moved useState up into the OrderProvider
  // const [order, setOrder] = useState([]);
  // Access state and updater function setOrder via context
  const [order, setOrder] = useContext(OrderContext);
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
