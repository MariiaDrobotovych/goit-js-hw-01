const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt('Введите пароль!');
const normalizedInput = userInput.toLocaleLowerCase();

if (userInput === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if (ADMIN_PASSWORD === normalizedInput){
    message = 'Добро пожаловать!';
    console.log(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
}
