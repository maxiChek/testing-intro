function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }
  const existingItem = cart.find((item) => item.id === product.id);

  const currentQuantity = existingItem ? existingItem.quantity : 0;
  if (currentQuantity + quantity > product.stock) {
    throw new RangeError('Количество не должно превышать количество на складе');
  }

  if (existingItem) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (!existingItem) {
    return cart;
  }

  if (newQuantity > existingItem.stock) {
    throw new RangeError('Количество не должно превышать количество на складе');
  }

  return cart.map((item) =>
    item.id === productId ? { ...item, quantity: newQuantity } : item
  );
}
function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);

  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }

  let delivery = 30000;
  if (subtotal >= 50000) {
    delivery = 0;
  }
  const total = subtotal - discount + delivery;

  return {
    subtotal: subtotal,
    discount: discount,
    delivery: delivery,
    total: total
  };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
