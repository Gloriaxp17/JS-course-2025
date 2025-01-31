`use strict`


// 5
const usersCategory = prompt("Введіть свою категорію: a , b чи c.");
switch (usersCategory) {
    case "a":
        document.write(` Ви мотоцикліст`);
        break;
    case "b":
        document.write(` Ви водій легкового
автомобіля`);
        break;
    case "c":
        document.write(` Ви водій вантажного автомобіля`);
        break;
    default:
        document.write(` категорія невідома`);
}