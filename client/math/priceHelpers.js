const formatPrice = (price) => {
  if (price === `$`) {
    return null;
  };

  if (!isNaN(price)) {
    price = price / 100;
    price = price.toString();
  }

  if (price[0] !== `$`) {
    price = `$${price}`;
  };

  let idx = price.indexOf(`.`);
  if (idx === -1) {
    price += `.00`;
    idx = price.indexOf(`.`);
  };

  while (price.length - idx < 3) {
    price += `0`;
  };

  if (price.length - idx > 3) {
    price = price.substring(0, idx + 4);
  };

  return price;
}

// console.log(formatPrice(`$`));

const totalTipAndTax = (total, tip, tax) => {
  total = Math.round(total * 100);
  tip = Math.floor(total * tip);
  tax = Math.floor(total * tax);
  let sum = Math.ceil((total + tip + tax) / 100) * 100;
  tip = sum - (total + tax);
  return { total, tip, tax, sum };
}

export {
  formatPrice,
  totalTipAndTax
};
