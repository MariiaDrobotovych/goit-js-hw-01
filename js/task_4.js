let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let amount = prompt('Сколько Вам необходимо ремонтных дроидов?');
let message = 0;

if (amount === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if (amount >= 1) {
    amount = Number(amount);
    totalPrice = amount * pricePerDroid;
    console.log(totalPrice)
}

const balance = 5000;
let newBalance = 0;

if (totalPrice < balance) {
    newBalance = balance - totalPrice;
    console.log(`Вы купили ${amount} дроидов, на счету осталось ${newBalance} кредитов.`);
} else {
     console.log('Недостаточно средств на счету!');
}
    
