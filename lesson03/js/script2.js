`use strict`
//2

//Ціна товару
//Кількість грошей
const cost = parseInt(prompt("введіть ціну товару "));
const money = parseInt(prompt("введіть кількість грошей "));
if (money < cost)
    document.write(`відмова у покупці`);
else
    document.write(`пропонуємо купити лотерею за 4 грн. `);
