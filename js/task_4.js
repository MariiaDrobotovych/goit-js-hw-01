let credits = 23580;
const pricePerDroid = 3000;

let amount = prompt('Сколько Вам необходимо ремонтных дроидов?');
let message = 0;

if (amount === null) {
  message = 'Отменено пользователем!';
  console.log(message);
}

const totalPrice = pricePerDroid * amount;
if (totalPrice < credits) {
  amount = Number(amount);
  credits -= totalPrice;
  console.log(
    `Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов.`,
  );
} else {
  console.log('Недостаточно средств на счету!');
}
