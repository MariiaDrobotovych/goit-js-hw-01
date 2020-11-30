const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt('Введите пароль!');

if (userInput === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (ADMIN_PASSWORD === userInput) {
  message = 'Добро пожаловать!';
  console.log(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}

alert(message);