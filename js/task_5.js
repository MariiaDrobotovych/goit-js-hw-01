const country = prompt('Выберите страну доставки');
let normalizedCountry = country.toLowerCase();
let price = 0;
let deliveryCountry = 0;

switch (normalizedCountry) {
  case 'китай': {
    deliveryCountry = 'Китай';
    price = 100;
    console.log(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  }
  case 'чили': {
    deliveryCountry = 'Чили';
    price = 250;
    console.log(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  }
  case 'австралия': {
    deliveryCountry = 'Австралия';
    price = 170;
    console.log(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  }
  case 'индия': {
    deliveryCountry = 'Индия';
    price = 80;
    console.log(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  }
  case 'ямайка': {
    deliveryCountry = 'Ямайка';
    price = 120;
    console.log(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
    break;
  }
  default:
    console.log('В вашей стране доставка не доступна');
}
