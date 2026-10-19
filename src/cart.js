function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

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
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
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
