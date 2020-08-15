const formatPrice = (price) => {
  price = price.toString()
  if (price[0] !== `$`) price = `$${price}`;
  let idx = price.indexOf(`.`)
  if (idx === -1) {
    price += `.00`;
    idx = price.indexOf(`.`)
  }
  while (price.length - idx < 3) {
    price += `0`;
  }
  while (price.length - idx > 3) {
    // simple math instead of a loop
    price = price.substring(0, price.length - 1)
  }
  return price;
}

export default formatPrice;
