export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // Calculate shipping price (If order is over 1000 then free, else 50)
  state.shippingPrice = state.itemsPrice > 1000 ? 0 : 50;
  // Calculate tax price (5% GST)
  state.taxPrice = addDecimal(Number((0.05 * state.itemsPrice).toFixed(2)));
  // Calculate total price
  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice).toFixed(2);
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
